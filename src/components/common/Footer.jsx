import React from 'react';
import { Sparkles, Globe, Share2, Mail, ExternalLink } from 'lucide-react';


export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] border-t border-[#222430] py-16">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#222430]">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <a href="#sec-hero" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6366F1] to-[#818CF8] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                FORTEVE<span className="text-[#6366F1]">.</span>
              </span>
            </a>
            <p className="text-sm text-[#9CA3AF] max-w-sm leading-relaxed">
              Forteve is a high-performance digital agency crafting web applications, React architectures, and interactive digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#9CA3AF]">
              <li><a href="#sec-hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#sec-services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#sec-about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#sec-work" className="hover:text-white transition-colors">Our Work</a></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-white uppercase tracking-wider">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2.5 rounded-lg bg-[#181920] border border-[#222430] text-[#9CA3AF] hover:text-white hover:border-indigo-500/50 transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-lg bg-[#181920] border border-[#222430] text-[#9CA3AF] hover:text-white hover:border-indigo-500/50 transition-colors" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="mailto:hello@forteve.com" className="p-2.5 rounded-lg bg-[#181920] border border-[#222430] text-[#9CA3AF] hover:text-white hover:border-indigo-500/50 transition-colors" aria-label="Email Us">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p>© {new Date().getFullYear()} Forteve Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
