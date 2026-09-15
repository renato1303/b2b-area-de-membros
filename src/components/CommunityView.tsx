/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UserProfile } from '../types';
import { 
  ArrowRight, 
  MessageCircle
} from 'lucide-react';
import { SeraCacauIcon } from './SeraCacauIcon';

interface CommunityViewProps {
  user: UserProfile;
}

export const CommunityView: React.FC<CommunityViewProps> = ({ user }) => {
  // Link da Comunidade Oficial de Prescritoras Será Cacau
  const communityUrl = 'https://chat.whatsapp.com/JPRRRnGlicB0wYFkTiGvUT';

  const handleOpenCommunity = () => {
    window.open(communityUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 py-10 max-w-5xl mx-auto w-full flex flex-col items-center justify-center font-sans text-primary-text animate-fadeIn min-h-[70vh]">
      
      {/* Card Principal da Comunidade */}
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
            Grupo WhatsApp para Parceiros
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#D6DFD7] leading-relaxed max-w-xl">
            Um espaço exclusivo para proprietários de empórios, cafeterias, lojas de produtos naturais e gestores de varejo compartilharem estratégias de degustação no balcão, posicionamento de displays e aumento de giro no PDV.
          </p>

          {/* Botão de Redirecionamento Direto */}
          <div className="pt-4 w-full flex flex-col items-center gap-3">
            <a
              href={communityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-primary-accent via-luxury-accent to-primary-accent text-[#1C261D] font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-2xl hover:scale-105 hover:opacity-95 transition-all duration-300 font-mono cursor-pointer group border border-white/20"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Acessar comunidade para parceiros</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <span className="text-[11px] text-[#A6B2A8] font-mono">
              Você será redirecionado para o canal oficial de comunicação e trade marketing B2B.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};
