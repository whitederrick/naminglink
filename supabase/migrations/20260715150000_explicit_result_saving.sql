delete from public.naming_logs where user_id is null;

alter table public.naming_logs alter column user_id set not null;

alter table public.naming_logs
  drop constraint if exists naming_logs_user_id_fkey,
  add constraint naming_logs_user_id_fkey
    foreign key (user_id) references auth.users(id) on delete cascade;

drop policy if exists "Users can read their saved naming results" on public.naming_logs;
create policy "Users can read their saved naming results"
on public.naming_logs for select to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can delete their saved naming results" on public.naming_logs;
create policy "Users can delete their saved naming results"
on public.naming_logs for delete to authenticated
using (auth.uid() = user_id);

grant select, delete on public.naming_logs to authenticated;

alter table public.ai_usage_logs
  drop column if exists naming_log_id,
  drop column if exists user_id;

alter table public.ad_events
  drop column if exists naming_log_id,
  drop column if exists user_id;
