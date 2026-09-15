/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UserProfile } from '../types';
import { 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';
import { SeraCacauIcon } from './SeraCacauIcon';

interface SupportViewProps {
  user: UserProfile;
}

export const SupportView: React.FC<SupportViewProps> = ({ user }) => {
  // Link oficial do WhatsApp de Suporte Será Cacau (+55 73 99907-1306)
  const whatsappMessage = encodeURIComponent(
    `Olá equipe Comercial Será Cacau! Sou ${user.name} do estabelecimento ${user.tradeName || 'Revendedor Homologado'}. Gostaria de um atendimento sobre pedidos de atacado, tabela B2B ou materiais de PDV.`
  );
  // Link para abertura do WhatsApp
  const supportWhatsappUrl = `https://wa.me/5573999071306?text=${whatsappMessage}`;

  return (
    <div className="px-4 sm:px-6 md:px-12 py-10 max-w-5xl mx-auto w-full flex flex-col items-center justify-center font-sans text-primary-text animate-fadeIn min-h-[70vh]">
      
      {/* Card Principal do Suporte */}
      <div className="w-full bg-gradient-to-br from-primary-forest via-secondary-forest to-primary-forest text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-luxury-accent/30 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
        
        {/* Efeitos de Iluminação de Fundo */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-luxury-accent/15 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary-accent/20 blur-3xl pointer-events-none" />

        {/* Ícone e Título Superior */}
        <div className="relative z-10 flex flex-col items-center gap-4 max-w-2xl">
          <div className="w-20 h-20 rounded-2xl bg-white/10 border border-luxury-accent/40 flex items-center justify-center shadow-inner my-2 text-luxury-accent">
            <SeraCacauIcon className="w-10 h-10" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Central de Ajuda & Suporte ao Lojista
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#D6DFD7] leading-relaxed max-w-xl">
            Precisa de auxílio com pedidos faturados no atacado, reposição de estoque emergencial, solicitação de displays de madeira ou suporte técnico para sua equipe de vendas? Nosso gerente de contas atende você diretamente no WhatsApp.
          </p>

          {/* Botão de Redirecionamento Direto para o WhatsApp */}
          <div className="pt-4 w-full flex flex-col items-center gap-3">
            <a
              href={supportWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#128C7E] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-2xl hover:scale-105 hover:opacity-95 transition-all duration-300 font-mono cursor-pointer group border border-white/20"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Falar no WhatsApp com o Gerente B2B</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <span className="text-[11px] text-[#A6B2A8] font-mono">
              Você será redirecionado para conversar em tempo real com nossa mesa de atendimento comercial.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

