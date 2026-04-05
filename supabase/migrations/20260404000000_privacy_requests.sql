-- Privacy requests table for GDPR / data subject requests
create table if not exists privacy_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  request_type text not null check (request_type in ('data_deletion', 'data_export', 'opt_out', 'general_inquiry')),
  message text,
  status text not null default 'pending' check (status in ('pending', 'in_progress', 'resolved')),
  created_at timestamptz not null default now()
);

-- Index for admin queries by email and status
create index idx_privacy_requests_email on privacy_requests(email);
create index idx_privacy_requests_status on privacy_requests(status);
create index idx_privacy_requests_created_at on privacy_requests(created_at desc);

-- Enable Row Level Security
alter table privacy_requests enable row level security;

-- Anyone can submit a privacy request (anonymous)
create policy "Allow public insert" on privacy_requests
  for insert to anon, authenticated
  with check (true);

-- Only authenticated users (admins) can view requests
create policy "Allow authenticated select" on privacy_requests
  for select to authenticated
  using (true);

-- Only authenticated users can update request status
create policy "Allow authenticated update" on privacy_requests
  for update to authenticated
  using (true);
