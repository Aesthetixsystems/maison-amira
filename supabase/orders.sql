-- Maison Amira — orders table
-- Run this once in your Supabase project (SQL Editor → paste → Run).
-- The Stripe webhook writes a row here after every successful payment.

create table if not exists public.orders (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  stripe_session_id text unique,
  status        text not null default 'paid',
  email         text,
  customer_name text,
  phone         text,
  amount_total  integer,          -- in pence
  currency      text,
  items         jsonb,            -- [{ description, quantity, amount_total }]
  shipping_name text,
  shipping_address jsonb,         -- { line1, line2, city, postal_code, country, ... }
  forwarded_to_supplier boolean not null default false
);

-- Only the server (service-role key) writes/reads this table.
-- Row Level Security on + no public policies = the anon key can't touch it.
alter table public.orders enable row level security;
