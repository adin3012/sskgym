-- Migration: gym_leads
-- Creates a table to capture gym membership leads from the contact form

CREATE TABLE IF NOT EXISTS public.gym_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    membership_interest TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_gym_leads_created_at ON public.gym_leads(created_at);
CREATE INDEX IF NOT EXISTS idx_gym_leads_email ON public.gym_leads(email);

ALTER TABLE public.gym_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone (public) to insert leads (no auth required for lead capture)
DROP POLICY IF EXISTS "public_can_insert_gym_leads" ON public.gym_leads;
CREATE POLICY "public_can_insert_gym_leads"
ON public.gym_leads
FOR INSERT
TO public
WITH CHECK (true);

-- Only authenticated users (admins) can read leads
DROP POLICY IF EXISTS "authenticated_can_read_gym_leads" ON public.gym_leads;
CREATE POLICY "authenticated_can_read_gym_leads"
ON public.gym_leads
FOR SELECT
TO authenticated
USING (true);
