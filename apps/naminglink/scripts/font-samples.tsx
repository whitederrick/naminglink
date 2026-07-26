// 표지 서체 후보 비교 시안 렌더 (임시 스크립트 — 커밋하지 않음).
import { writeFileSync } from "node:fs";
import path from "node:path";
import React from "react";
import { Document, Font, Page, StyleSheet, Text, View, renderToBuffer } from "@react-pdf/renderer";

const assets = "C:/myProjects/naminglink/assets/fonts";
const scratch =
  "C:/Users/white/AppData/Local/Temp/claude/C--myProjects-naminglink/75952ee8-b9f5-4335-9a3a-9080fb0b880e/scratchpad";

const candidates = [
  { key: "A", family: "SangSangRock", label: "A. 정묵바위체 (서예가 붓글씨)", src: path.join(scratch, "SangSangRock.ttf") },
  { key: "B", family: "ChusaLoveBold", label: "B. 추사사랑체 Bold (추사 김정희풍)", src: path.join(scratch, "chusalove/ChusaLoveBold.ttf") },
  { key: "C", family: "Makgeolli", label: "C. 포천막걸리체 (손붓글씨)", src: path.join(scratch, "Makgeolli.ttf") },
  { key: "D", family: "KirangHaerang", label: "D. 기랑해랑체 (굵은 획)", src: path.join(scratch, "KirangHaerang-Regular.ttf") },
  { key: "E", family: "EastSeaDokdo", label: "E. 동해독도체 (현재 1번)", src: path.join(assets, "EastSeaDokdo-Regular.ttf") },
  { key: "F", family: "NanumBrush", label: "F. 나눔붓글씨 (현재 2번)", src: path.join(assets, "NanumBrushScript-Regular.ttf") },
];

for (const item of candidates) {
  Font.register({ family: item.family, fonts: [{ src: item.src, fontWeight: 400 }] });
}
Font.register({
  family: "NotoSansKR",
  fonts: [{ src: path.join(assets, "NotoSansKR-400.ttf"), fontWeight: 400 }],
});
Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: { backgroundColor: "#f6efdf", padding: 24, fontFamily: "NotoSansKR" },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.8,
    borderBottomColor: "#c9b184",
    paddingVertical: 12,
  },
  label: { width: 210, fontSize: 11, color: "#6d6457" },
  sample: { fontSize: 54, color: "#221c14" },
});

function Sheet() {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Text style={{ fontSize: 13, marginBottom: 4 }}>
          표지 이름 서체 시안 2차 — 김하늘 · 왕샤오밍 (전부 판매 PDF 임베딩 가능 확인 서체)
        </Text>
        {candidates.map((item) => (
          <View key={item.key} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={[styles.sample, { fontFamily: item.family }]}>김하늘  왕샤오밍</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}

async function main() {
  const buffer = await renderToBuffer(<Sheet />);
  const out = path.join(scratch, "font-samples2.pdf");
  writeFileSync(out, buffer);
  console.log(out);
}

void main();
