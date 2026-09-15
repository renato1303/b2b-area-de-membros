/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  User, 
  Phone, 
  Instagram, 
  MapPin, 
  ShieldCheck, 
  FileCheck,
  CheckCircle2,
  Sparkles,
  Tag,
  Copy,
  Check,
  LogOut
} from 'lucide-react';
import { UserProfile, UserRole } from '../types';
import { getPatientCoupon } from '../lib/coupon';

interface ProfileViewProps {
  user: UserProfile;
  onUpdateProfile: (updatedProfile: UserProfile) => void;
  onLogout?: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ user, onUpdateProfile, onLogout }) => {
  const [formData, setFormData] = useState<UserProfile>({ ...user });
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [copiedPatient, setCopiedPatient] = useState(false);

  const patientCoupon = formData.patientCoupon || user.patientCoupon || user.couponCode || getPatientCoupon(formData.name);

  const handleCopyPatient = () => {
    navigator.clipboard.writeText(patientCoupon);
    setCopiedPatient(true);
    setTimeout(() => setCopiedPatient(false), 2200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setIsSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 4000);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-6 md:px-12 flex flex-col gap-8 font-sans text-primary-text">
      
      {/* Header */}
      <header className="flex flex-col gap-3">
        <span className="text-xs tracking-[0.2em] uppercase text-primary-accent font-bold font-mono">
          Dados Corporativos & Faturamento
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-primary-forest">
          Perfil do Revendedor Homologado
        </h1>
        <p className="text-xs md:text-sm text-secondary-text leading-relaxed">
          Mantenha os dados cadastrais da sua empresa atualizados para assegurar condições comerciais exclusivas, emissão correta de NFe e entregas pontuais de pedidos faturados.
        </p>
        <div className="h-[1px] bg-border-color/60 mt-2"></div>
      </header>

      {/* Wholesale Commercial Conditions Card */}
      <div className="bg-gradient-to-br from-primary-forest via-[#1e2a1f] to-primary-forest text-white rounded-2xl p-6 border border-luxury-accent/30 shadow-lg relative overflow-hidden flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.25em] font-mono text-luxury-accent font-bold uppercase flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-luxury-accent" /> Condições Comerciais & Tabela B2B
            </span>
            <span className="text-xs text-[#EFE6D7]/80 mt-1">
              Benefícios e precificação de atacado direto de fábrica para revenda.
            </span>
          </div>
          <span className="text-[9px] font-mono uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
            Homologado
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* Wholesale Pricing Linked to Account */}
          <div className="bg-black/30 border border-luxury-accent/30 rounded-xl p-4 flex flex-col justify-between gap-2.5">
            <div className="flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-wider font-mono text-luxury-accent font-bold">
                Tabela Atacado Direto de Fábrica
              </span>
              <span className="text-[8px] bg-luxury-accent/20 text-luxury-accent px-2 py-0.5 rounded font-bold">
                30% Desconto Revenda
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] text-[#C8D1C7]">
                Conta B2B vinculada ao e-mail comercial:
              </span>
              <span className="text-sm font-mono font-extrabold text-luxury-accent tracking-wide break-all">
                {formData.email}
              </span>
            </div>
            <span className="text-[10px] text-[#C8D1C7]/70 italic">
              Preços de atacado liberados automaticamente para pedidos com faturamento PJ.
            </span>
          </div>

          {/* Promotional Coupon for Resellers */}
          <div 
            onClick={handleCopyPatient}
            className="bg-black/30 hover:bg-black/40 border border-primary-accent/30 hover:border-primary-accent/60 rounded-xl p-4 flex flex-col justify-between gap-2.5 cursor-pointer transition-all group"
          >
            <div className="flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-wider font-mono text-secondary-accent font-bold">
                Cupom de Bonificação de Pedido
              </span>
              <span className="text-[8px] bg-primary-accent/20 text-secondary-accent px-2 py-0.5 rounded font-bold">
                B2B VIP
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-[11px] text-[#C8D1C7]">
                  Código de reposição bonificada:
                </span>
                <span className="text-base font-mono font-extrabold text-white tracking-wider truncate" title={patientCoupon}>
                  {patientCoupon || 'B2BATACADO'}
                </span>
              </div>
              <button 
                type="button" 
                className="p-1.5 rounded-lg bg-white/10 hover:bg-primary-accent/30 text-secondary-accent transition-colors shrink-0"
              >
                {copiedPatient ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <span className="text-[10px] text-[#C8D1C7]">
              {copiedPatient ? <span className="text-emerald-400 font-bold font-mono">Copiado para a área de transferência!</span> : 'Código de bonificação para inclusão em pedidos via televendas.'}
            </span>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-surface border border-border-color rounded-lg p-6 md:p-8 flex flex-col gap-6 shadow-sm">
        
        {/* Success message */}
        {isSaved && (
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 px-4 py-3.5 rounded text-xs flex items-center gap-2.5 animate-fade-in font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Cadastro comercial atualizado com sucesso no ecossistema Será Cacau B2B!</span>
          </div>
        )}

        <div className="flex items-center gap-4 border-b border-border-color/60 pb-6">
          <div className="w-16 h-16 rounded-full bg-primary-accent/15 border border-primary-accent/20 text-primary-accent font-bold text-2xl flex items-center justify-center uppercase shrink-0">
            {(formData.tradeName || formData.name).charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-primary-forest">{formData.tradeName || formData.name}</span>
            <span className="text-[10px] text-primary-accent font-bold uppercase tracking-widest mt-0.5 font-mono">
              STATUS: {formData.role === UserRole.ADMIN ? 'Gestão Comercial B2B' : 'Revendedor Homologado Ouro'}
            </span>
          </div>
        </div>

        {/* Input fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase text-secondary-text font-bold font-mono">Responsável Comercial</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded border border-border-color focus:border-primary-accent focus:outline-none bg-bg-app text-xs text-primary-text font-sans"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase text-secondary-text font-bold font-mono">Razão Social / Nome Fantasia da Loja</label>
            <input
              type="text"
              name="tradeName"
              value={formData.tradeName || ''}
              onChange={handleChange}
              placeholder="Empório & Café Gourmet"
              className="w-full px-4 py-2.5 rounded border border-border-color focus:border-primary-accent focus:outline-none bg-bg-app text-xs text-primary-text font-sans"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase text-secondary-text font-bold font-mono">CNPJ da Empresa</label>
            <input
              type="text"
              name="cnpj"
              value={formData.cnpj || ''}
              onChange={handleChange}
              placeholder="00.000.000/0001-00"
              className="w-full px-4 py-2.5 rounded border border-border-color focus:border-primary-accent focus:outline-none bg-bg-app text-xs text-primary-text font-sans"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase text-secondary-text font-bold font-mono">E-mail Corporativo</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled
              className="w-full px-4 py-2.5 rounded border border-border-color bg-secondary-surface text-xs text-secondary-text cursor-not-allowed font-sans"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase text-secondary-text font-bold font-mono">Telefone / WhatsApp de Compras</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="w-full px-4 py-2.5 rounded border border-border-color focus:border-primary-accent focus:outline-none bg-bg-app text-xs text-primary-text font-sans"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase text-secondary-text font-bold font-mono">Instagram da Loja</label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="@loja.emporio"
              className="w-full px-4 py-2.5 rounded border border-border-color focus:border-primary-accent focus:outline-none bg-bg-app text-xs text-primary-text font-sans"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase text-secondary-text font-bold font-mono">Segmento do Estabelecimento</label>
            <input
              type="text"
              name="storeType"
              value={formData.storeType || ''}
              onChange={handleChange}
              placeholder="Empório, Cafeteria, Produtos Naturais"
              className="w-full px-4 py-2.5 rounded border border-border-color focus:border-primary-accent focus:outline-none bg-bg-app text-xs text-primary-text font-sans"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase text-secondary-text font-bold font-mono">
              Cidade da Loja / Filial
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Ex: São Paulo"
              className="w-full px-4 py-2.5 rounded border border-border-color focus:border-primary-accent focus:outline-none bg-bg-app text-xs text-primary-text font-sans"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-widest uppercase text-secondary-text font-bold font-mono">
              Estado (UF)
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Ex: SP"
              maxLength={2}
              className="w-full px-4 py-2.5 rounded border border-border-color focus:border-primary-accent focus:outline-none bg-bg-app text-xs text-primary-text font-sans uppercase"
            />
          </div>

        </div>

        {/* Action Button */}
        <button
          id="save-profile-btn"
          type="submit"
          className="w-full py-3.5 bg-primary-accent hover:bg-primary-accent/90 text-white rounded text-xs tracking-widest uppercase transition-all mt-4 font-mono font-bold shadow-sm hover:scale-101 cursor-pointer"
        >
          salvar informações cadastrais da loja
        </button>

      </form>

      {/* Trust credentials widget */}
      <div className="flex items-start gap-3 bg-surface border border-border-color rounded-lg p-5 shadow-sm">
        <ShieldCheck className="w-5 h-5 text-primary-accent shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-primary-forest">Faturamento Seguro & Privacidade</span>
          <p className="text-[11px] text-secondary-text leading-relaxed">
            Seus dados fiscais e cadastrais são protegidos sob a LGPD e utilizados exclusivamente para emissão de notas fiscais eletrônicas, apuração de tributos e logística de entrega comercial pela Será Cacau B2B.
          </p>
        </div>
      </div>

      {/* Logout Session Section */}
      {onLogout && (
        <div className="pt-4 border-t border-border-color flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-secondary-text">
            Deseja alternar de conta ou sair da sua sessão com segurança?
          </div>
          <button
            type="button"
            id="btn-logout-profile"
            onClick={onLogout}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-rose-300 text-rose-700 bg-rose-50/70 hover:bg-rose-100 text-xs font-bold transition-all cursor-pointer shadow-xs"
          >
            <LogOut className="w-4 h-4" />
            <span>Sair da Sessão</span>
          </button>
        </div>
      )}

    </div>
  );
};
