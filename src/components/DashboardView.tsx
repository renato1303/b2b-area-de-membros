/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SeraCacauIcon } from './SeraCacauIcon';
import { 
  ArrowRight, 
  Sprout, 
  Download, 
  BookOpen, 
  Award,
  Sparkles, 
  Calendar, 
  Clock, 
  ChevronRight, 
  ShieldCheck,
  Users,
  Utensils,
  Leaf,
  Tag,
  CheckCircle2,
  Copy,
  Check,
  Percent,
  Share2,
  MessageCircle
} from 'lucide-react';
import { UserProfile, Course, Product, Campaign, FileAttachment } from '../types';
import { getPatientCoupon } from '../lib/coupon';

interface DashboardViewProps {
  user: UserProfile;
  courses?: Course[];
  products: Product[];
  campaigns: Campaign[];
  downloads: FileAttachment[];
  onNavigate: (tabId: string, item?: any) => void;
  onSelectProduct: (p: Product) => void;
  onSelectCourse?: (c: Course) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user,
  products,
  campaigns,
  downloads,
  onNavigate,
  onSelectProduct
}) => {

  const patientCoupon = user.patientCoupon || user.couponCode || getPatientCoupon(user.name);

  const [copiedPatient, setCopiedPatient] = useState(false);

  const handleCopyPatient = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(patientCoupon);
    setCopiedPatient(true);
    setTimeout(() => setCopiedPatient(false), 2200);
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 py-8 max-w-7xl mx-auto w-full flex flex-col gap-10 font-sans text-primary-text animate-fadeIn">
      
      {/* 1. Header Welcome Lounge & Digital Credential Card */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 bg-surface p-6 md:p-8 rounded-3xl border border-border-color shadow-sm relative overflow-hidden">
        
        {/* Glow rings */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-luxury-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary-accent/10 blur-3xl pointer-events-none" />

        {/* Text & Active Indicators */}
        <div className="flex flex-col justify-between gap-6 flex-1 min-w-0">
          <div>
            <h1 className="text-3xl md:text-4xl text-primary-forest font-extrabold tracking-tight">
              Bem-vindo, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-forest via-cocoa to-primary-accent italic font-semibold">{user.tradeName || user.name}</span>
            </h1>
            <p className="text-xs md:text-sm text-secondary-text mt-3 max-w-xl leading-relaxed">
              Sua conta de revendedor homologado está ativa. Acesse tabela de preços com 30% de desconto para revenda, pedidos de reposição, fichas técnicas e materiais promocionais de PDV.
            </p>
          </div>
        </div>

        {/* Digital Membership Credential Card (B2B Partner Credential) */}
        <div className="w-full lg:w-[360px] bg-gradient-to-br from-primary-forest via-secondary-forest to-primary-forest text-white rounded-2xl p-5 border border-luxury-accent/30 shadow-lg relative overflow-hidden flex flex-col justify-between h-48 group shrink-0 select-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-out pointer-events-none" />
          
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-[8px] tracking-[0.25em] font-mono text-luxury-accent font-bold uppercase">
                Credencial B2B
              </span>
              <span className="text-[7px] tracking-wider font-mono text-secondary-accent uppercase mt-0.5">
                Revendedor Homologado
              </span>
            </div>
            <ShieldCheck className="w-5 h-5 text-luxury-accent drop-shadow-[0_0_8px_rgba(198,165,106,0.5)]" />
          </div>

          <div className="flex flex-col gap-0.5 z-10">
            <span className="text-lg tracking-tight font-extrabold truncate text-white">
              {user.tradeName || user.name}
            </span>
            <span className="text-[9px] text-[#EFE6D7]/80 font-mono uppercase tracking-widest truncate">
              {user.storeType || 'Empório Gourmet & Cafeteria'}
            </span>
          </div>

          <div className="flex justify-between items-end border-t border-white/10 pt-3 mt-1.5">
            <div className="flex flex-col gap-0.5">
              <span className="text-[7px] text-white/40 uppercase tracking-widest font-mono">CNPJ</span>
              <span className="text-[10px] font-mono font-bold text-white">{user.cnpj || user.crn || '14.892.301/0001-44'}</span>
            </div>
            <div className="flex flex-col gap-0.5 items-end">
              <span className="text-[7px] text-white/40 uppercase tracking-widest font-mono">Nível</span>
              <span className="text-[10px] font-mono text-luxury-accent font-bold">{user.wholesaleTier || 'OURO'}</span>
            </div>
            <div className="flex flex-col gap-0.5 opacity-40 pl-2 shrink-0">
              <span className="text-[7px] font-mono text-emerald-400 font-bold">● VÁLIDO 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. VÍDEO EXCLUSIVO (PROPORÇÃO 9x16) ABAIXO DO CARD DE BEM-VINDOS */}
      <section className="bg-gradient-to-br from-[#1C261D] via-[#2A382C] to-[#151E16] text-[#F7F3EC] rounded-3xl p-6 md:p-10 border border-[#455347]/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary-accent/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-luxury-accent/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
          
          {/* Coluna de Texto & Apresentação */}
          <div className="w-full lg:w-7/12 space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
              Como Potencializar o Cacau no seu Negócio
            </h2>

            <p className="text-xs sm:text-sm text-[#C2C9C0] leading-relaxed">
              Conheça como cafeterias, empórios, hotéis e pousadas podem transformar o <strong className="text-white font-semibold">cacau Cabruca 100% brasileiro</strong> em novas experiências para seus clientes e oportunidades de receita.
            </p>

            <div className="bg-black/30 p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3 text-xs text-[#E0E6DF]">
              <div className="font-bold text-luxury-accent flex items-center gap-2 font-mono uppercase tracking-wider text-[11px]">
                <CheckCircle2 className="w-4 h-4 text-luxury-accent" /> Pilares da Parceria:
              </div>
              <ul className="space-y-2 text-[#C8D1C7]">
                <li className="flex items-start gap-2">
                  <span className="text-luxury-accent font-bold">•</span>
                  <span><strong className="text-white">Mais valor por venda:</strong> produtos e experiências que elevam o ticket médio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-luxury-accent font-bold">•</span>
                  <span><strong className="text-white">Aplicação na operação:</strong> fácil de incorporar a bebidas, receitas, degustações e experiências.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-luxury-accent font-bold">•</span>
                  <span><strong className="text-white">Experiência que gera consumo:</strong> apresente o cacau ao cliente e transforme curiosidade em novas compras.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-luxury-accent font-bold">•</span>
                  <span><strong className="text-white">Cacau com história:</strong> origem brasileira e cultivo Cabruca, conectando sabor, qualidade e sustentabilidade.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onNavigate('produtos')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-accent to-luxury-accent text-[#1C261D] font-bold text-xs uppercase tracking-wider shadow-xl hover:opacity-95 transition-all font-mono cursor-pointer"
              >
                <span>Catálogo de Produtos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Coluna do Vídeo em Proporção 9x16 */}
          <div className="w-full lg:w-5/12 flex justify-center items-center">
            <div className="w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden bg-black border-2 border-luxury-accent/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative group">
              <video
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full object-cover"
              >
                <source src="/menos%20coisa%20(1).mp4" type="video/mp4" />
                <source src="/menos coisa (1).mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Portais Essenciais B2B */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Hub Item 1: Catálogo de Produtos */}
        <div 
          onClick={() => onNavigate('produtos')}
          className="bg-surface rounded-2xl p-6 border border-border-color hover:border-primary-accent/40 shadow-sm transition-all duration-300 cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary-accent/10 text-primary-accent flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sprout className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-primary-forest">Catálogo de Produtos</h4>
            <p className="text-xs text-secondary-text leading-relaxed">
              Tabela de atacado com 30% de desconto para revenda, reposição e fichas técnicas para parceiros.
            </p>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-primary-accent font-mono flex items-center gap-1 mt-4 group-hover:translate-x-1 transition-transform">
            Ver Produtos <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Hub Item 2: Receitas & Cafeteria */}
        <div 
          onClick={() => onNavigate('receitas')}
          className="bg-surface rounded-2xl p-6 border border-border-color hover:border-primary-accent/40 shadow-sm transition-all duration-300 cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-luxury-accent/20 text-cocoa flex items-center justify-center group-hover:scale-110 transition-transform">
              <Utensils className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-primary-forest">Receitas & Cafeteria</h4>
            <p className="text-xs text-secondary-text leading-relaxed">
              Preparo de mochas, chocolates quentes especiais e harmonizações com café para o cardápio.
            </p>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-primary-accent font-mono flex items-center gap-1 mt-4 group-hover:translate-x-1 transition-transform">
            Ver 19 Receitas <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Hub Item 3: Fichas técnicas */}
        <div 
          onClick={() => onNavigate('fichas')}
          className="bg-surface rounded-2xl p-6 border border-border-color hover:border-primary-accent/40 shadow-sm transition-all duration-300 cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Download className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-primary-forest">Fichas técnicas</h4>
            <p className="text-xs text-secondary-text leading-relaxed">
              Tabela de preços atacado, manual de exposição de vitrine, fotos em alta e laudos de pureza.
            </p>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-primary-accent font-mono flex items-center gap-1 mt-4 group-hover:translate-x-1 transition-transform">
            Baixar Materiais <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Hub Item 4: Grupo WhatsApp */}
        <div 
          onClick={() => onNavigate('comunidade')}
          className="bg-surface rounded-2xl p-6 border border-border-color hover:border-primary-accent/40 shadow-sm transition-all duration-300 cursor-pointer flex flex-col justify-between group"
        >
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary-forest/10 text-primary-forest flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-primary-forest">Grupo WhatsApp</h4>
            <p className="text-xs text-secondary-text leading-relaxed">
              Troca de experiências, casos de sucesso no PDV e novidades no canal oficial dos revendedores.
            </p>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-primary-accent font-mono flex items-center gap-1 mt-4 group-hover:translate-x-1 transition-transform">
            Abrir WhatsApp <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

      </section>

      {/* 5. Vitrine Rápida de Produtos da Linha - Com Preço Atacado e Margem */}
      <section className="flex flex-col gap-5">
        <div className="flex justify-between items-end border-b border-border-color/60 pb-3">
          <div className="flex items-center gap-2.5">
            <SeraCacauIcon className="w-5 h-5 text-primary-accent" />
            <h3 className="text-xl font-extrabold tracking-tight text-primary-forest flex flex-wrap items-center gap-2">
              <span>Catálogo de Produtos</span>
              <span className="bg-emerald-600/15 text-emerald-800 text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full font-bold">
                Tabela Parceiro Ouro
              </span>
            </h3>
          </div>
          <button 
            onClick={() => onNavigate('produtos')}
            className="group flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-primary-accent hover:text-primary-forest transition-all font-mono cursor-pointer"
          >
            <span>Ver Catálogo de Produtos (10)</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.slice(0, 4).map((product) => (
            <div 
              key={product.id}
              onClick={() => {
                onSelectProduct(product);
                onNavigate('produtos');
              }}
              className="bg-surface rounded-2xl p-4 border border-border-color flex flex-col justify-between hover:border-primary-accent/40 shadow-sm transition-all duration-300 cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="w-full h-40 rounded-xl overflow-hidden bg-secondary-surface relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('gotas210.jpeg') && !target.src.includes('recipe-default.jpg')) {
                        target.src = '/images/gotas210.jpeg';
                      }
                    }}
                  />
                  <span className="absolute top-2 left-2 bg-primary-forest/80 backdrop-blur-sm text-luxury-accent text-[9px] font-bold px-2 py-0.5 rounded">
                    {product.weight}
                  </span>
                  <span className="absolute top-2 right-2 bg-emerald-700 text-white text-[8px] font-bold px-2 py-0.5 rounded font-mono shadow">
                    -30% Revenda
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-primary-forest line-clamp-1 group-hover:text-primary-accent transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-[11px] text-secondary-text mt-0.5 line-clamp-1 italic">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-border-color/60 flex flex-col gap-1.5 mt-3">
                <div className="flex justify-between items-baseline">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-secondary-text font-mono">Revenda (-30%):</span>
                    <span className="text-xs font-bold text-emerald-800 font-mono">
                      {product.wholesalePrice || product.price}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] uppercase tracking-wider text-secondary-text font-mono">Venda Sug.:</span>
                    <span className="text-xs font-semibold text-primary-forest font-mono">
                      {product.suggestedRetailPrice || product.price}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-bold text-primary-accent group-hover:translate-x-0.5 transition-all font-mono pt-1 border-t border-border-color/30">
                  <span>{product.wholesalePackUnits || 'Consulte lote'}</span>
                  <span className="flex items-center gap-0.5">Detalhes <ChevronRight className="w-3 h-3" /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
