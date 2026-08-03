import React, { useEffect } from 'react';

export const AdminRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://rohitbera.com/wp-admin/';
  }, []);

  return (
    <div className="min-h-screen bg-ocean-dark flex flex-col items-center justify-center text-white p-6 text-center">
      <div className="animate-spin w-12 h-12 border-4 border-gold border-t-transparent rounded-full mb-6" />
      <h2 className="font-serif text-2xl font-bold text-gold">Opening WordPress Admin Dashboard...</h2>
      <p className="text-xs text-sand/80 mt-2 font-sans">Redirecting to https://rohitbera.com/wp-admin/</p>
      <a
        href="https://rohitbera.com/wp-admin/"
        className="mt-6 px-6 py-2.5 rounded-full bg-gold text-ocean-dark font-poppins font-bold text-xs uppercase tracking-wider hover:brightness-110"
      >
        Click Here If Not Redirected
      </a>
    </div>
  );
};
