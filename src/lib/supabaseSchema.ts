/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SUPABASE_SQL_SCHEMA = `-- ==============================================================================
-- SCRIPT DE CRIAÇÃO DO BANCO DE DADOS - SERÁ CACAU B2B & PARCEIROS
-- Execute este script no SQL Editor do seu Supabase Dashboard
-- (https://supabase.com/dashboard/project/_/sql)
-- ==============================================================================

-- 1. Habilitar extensão pgcrypto para geração de UUID
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Tabela de Lojistas, Revendedores e Administradores (profiles)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  trade_name TEXT,
  company_name TEXT,
  cnpj TEXT,
  phone TEXT,
  city TEXT,
  state TEXT,
  store_type TEXT DEFAULT 'Empório & Produtos Naturais',
  wholesale_tier TEXT DEFAULT 'Ouro',
  specialty TEXT DEFAULT 'Revendedor Autorizado',
  role TEXT DEFAULT 'REVENDEDOR',
  patient_coupon TEXT DEFAULT 'B2BATACADO',
  coupon_code TEXT DEFAULT 'B2BATACADO',
  instagram TEXT,
  total_points INTEGER DEFAULT 0,
  tier TEXT DEFAULT 'Ouro',
  payment_terms TEXT DEFAULT 'Faturado 28 dias sob consulta',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para busca rápida
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_cnpj ON public.profiles(cnpj);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_patient_coupon ON public.profiles(patient_coupon);

-- 3. Tabela de Pedidos e Solicitações de Atacado (b2b_orders)
CREATE TABLE IF NOT EXISTS public.b2b_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  member_email TEXT NOT NULL,
  store_name TEXT,
  cnpj TEXT,
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  total_wholesale_amount NUMERIC(10,2) DEFAULT 0,
  status TEXT DEFAULT 'PENDING',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Tabela de Histórico de Pontos e Bonificações (points_history)
CREATE TABLE IF NOT EXISTS public.points_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  user_email TEXT,
  points INTEGER NOT NULL,
  reason TEXT NOT NULL,
  source TEXT DEFAULT 'MANUAL',
  order_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Tabela de Fichas Técnicas & Laudos (technical_sheets)
CREATE TABLE IF NOT EXISTS public.technical_sheets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id TEXT NOT NULL,
  title TEXT NOT NULL,
  batch_number TEXT,
  laudo_url TEXT,
  specifications JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Configurar Políticas de Segurança (Row Level Security - RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.b2b_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.points_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.technical_sheets ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles (leitura e gravação permitidas para a plataforma)
DROP POLICY IF EXISTS "Permitir leitura pública de perfis" ON public.profiles;
CREATE POLICY "Permitir leitura pública de perfis" 
  ON public.profiles FOR SELECT 
  USING (true);

DROP POLICY IF EXISTS "Permitir inserção e atualização de perfis" ON public.profiles;
CREATE POLICY "Permitir inserção e atualização de perfis" 
  ON public.profiles FOR ALL 
  USING (true) 
  WITH CHECK (true);

-- Políticas para b2b_orders
DROP POLICY IF EXISTS "Permitir acesso aos pedidos b2b" ON public.b2b_orders;
CREATE POLICY "Permitir acesso aos pedidos b2b" 
  ON public.b2b_orders FOR ALL 
  USING (true) 
  WITH CHECK (true);

-- Políticas para points_history
DROP POLICY IF EXISTS "Permitir leitura de histórico de pontos" ON public.points_history;
CREATE POLICY "Permitir leitura de histórico de pontos" 
  ON public.points_history FOR SELECT 
  USING (true);

DROP POLICY IF EXISTS "Permitir gravação de histórico de pontos" ON public.points_history;
CREATE POLICY "Permitir gravação de histórico de pontos" 
  ON public.points_history FOR ALL 
  USING (true) 
  WITH CHECK (true);

-- Políticas para technical_sheets
DROP POLICY IF EXISTS "Permitir leitura de fichas tecnicas" ON public.technical_sheets;
CREATE POLICY "Permitir leitura de fichas tecnicas" 
  ON public.technical_sheets FOR SELECT 
  USING (true);

-- 7. Cadastrar Administradora Principal (Madeleine - S'era Cacau)
INSERT INTO public.profiles (
  name,
  trade_name,
  company_name,
  cnpj,
  store_type,
  wholesale_tier,
  email,
  phone,
  instagram,
  specialty,
  city,
  state,
  role,
  patient_coupon,
  coupon_code,
  total_points,
  tier
) VALUES (
  'Madeleine',
  'S''era Cacau Brasil',
  'S''era Cacau Agroflorestal Ltda',
  '45.123.890/0001-12',
  'Matriz / Indústria Agroflorestal',
  'Embaixador',
  'madeleine@seracacau.com.br',
  '(11) 98123-4567',
  '@seracacau',
  'Gestão Comercial & Expansão B2B',
  'São Paulo',
  'SP',
  'ADMIN',
  'B2BATACADO',
  'B2BATACADO',
  0,
  'Diamante'
) ON CONFLICT (email) DO UPDATE SET
  role = 'ADMIN',
  name = 'Madeleine',
  trade_name = 'S''era Cacau Brasil';

-- 8. Recarregar cache de esquemas do PostgREST
NOTIFY pgrst, 'reload schema';
`;
