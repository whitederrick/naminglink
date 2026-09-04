#!/usr/bin/env bash
# Vercel ignoreCommand — 이 앱과 관련된 경로($@)에 변경이 없으면 빌드를 건너뛴다.
#
# 20판 묶음처럼 한 번에 많은 커밋을 푸시하면 VERCEL_GIT_PREVIOUS_SHA가 Vercel의 얕은
# 클론 깊이 밖에 있어 `git diff`가 "fatal: bad object"로 죽는다(2026-09-04에 네 앱
# 배포가 전부 이렇게 실패했다). 그 SHA가 없으면 한 번 더 받아 보고, 그래도 없으면
# exit 1(빌드 진행)로 안전하게 돌아간다 — 스킵 쪽으로 틀리면 안 되므로.
#
# vercel.json의 ignoreCommand는 256자 제한이 있어 이 로직을 인라인으로 못 넣는다.
cd "$(git rev-parse --show-toplevel)" || exit 1
PREV="${VERCEL_GIT_PREVIOUS_SHA:-HEAD^}"
git cat-file -e "$PREV" 2>/dev/null \
  || git fetch --quiet --unshallow origin 2>/dev/null \
  || git fetch --quiet --deepen=200 origin 2>/dev/null
git cat-file -e "$PREV" 2>/dev/null || exit 1
git diff --quiet "$PREV" HEAD -- "$@"
