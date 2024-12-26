import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <nav className="navbar bg-amber-400 shadow-lg relative text-black">
      {/* Navbar Start */}
      <div className="navbar-start text-black">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-yellow-200 rounded-box z-[1] mt-3 w-52 shadow"
          >
            <li>
              <a>Profil</a>
              <ul className="p-2">
                <li><Link href="/profil/sejarah">Sejarah</Link></li>
                <li><Link href="/profil/struktur">Struktur Organisasi</Link></li>
                <li><Link href="/profil/visi">Visi dan Misi</Link></li>
                <li><Link href="/profil/agenda">Agenda Tahunan</Link></li>
                <li><Link href="/profil/laporan">Laporan Tahunan</Link></li>
              </ul>
            </li>
            <li>
              <a>Layanan</a>
              <ul className="p-2">
                <li><Link href="/layanan/standar">Standar Pelayanan</Link></li>
                <li><Link href="/layanan/pengajuan">Pengajuan</Link></li>
                <li><Link href="/layanan/pengaduan">Pengaduan</Link></li>
                <li><Link href="/layanan/survei">Survei Kepuasan</Link></li>
              </ul>
            </li>
            <li>
              <a>Berita</a>
              <ul className="p-2">
                <li><Link href="/berita/pengumuman">Pengumuman</Link></li>
                <li><Link href="/berita/kegiatan">Kegiatan</Link></li>
                <li><Link href="/berita/acara">Acara</Link></li>
                <li><Link href="/berita/lomba">Kompetisi/Lomba</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <Link href="/" className="text-2xl">UPT IPKM</Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center lg:flex text-black">
        <ul className="menu menu-horizontal px-1 flex space-x-4">
          <li className="group relative">
            <a className="cursor-pointer">Profil</a>
            <ul className="absolute left-0 hidden bg-yellow-200 p-2 rounded shadow-lg group-hover:block mt-10">
              <li><Link href="/profil/sejarah">Sejarah</Link></li>
              <li><Link href="/profil/struktur">Struktur Organisasi</Link></li>
              <li><Link href="/profil/visi">Visi dan Misi</Link></li>
              <li><Link href="/profil/agenda">Agenda Tahunan</Link></li>
              <li><Link href="/profil/laporan">Laporan Tahunan</Link></li>
            </ul>
          </li>
          <li className="group relative">
            <a className="cursor-pointer">Layanan</a>
            <ul className="absolute left-0 hidden bg-yellow-200 p-2 rounded shadow-lg group-hover:block mt-10">
              <li><Link href="/layanan/standar">Standar Pelayanan</Link></li>
              <li><Link href="/layanan/pengajuan">Pengajuan</Link></li>
              <li><Link href="/layanan/pengaduan">Pengaduan</Link></li>
              <li><Link href="/layanan/survei">Survei Kepuasan</Link></li>
            </ul>
          </li>
          <li className="group relative">
            <a className="cursor-pointer">Berita</a>
            <ul className="absolute left-0 hidden bg-yellow-200 p-2 rounded shadow-lg group-hover:block mt-10">
              <li><Link href="/berita/pengumuman">Pengumuman</Link></li>
              <li><Link href="/berita/kegiatan">Kegiatan</Link></li>
              <li><Link href="/berita/lomba">Kompetisi/Lomba</Link></li>
            </ul>
          </li>
          <li>
            <Link href="#" className="">Monev</Link>
          </li>
        </ul>
      </div>

<div className="navbar-end text-black text-xl flex items-center">
  <div className="relative">
    {/* Input field with an icon inside */}
    <input
      type="text"
      placeholder="Cari..."
      className={`input input-bordered bg-yellow-50 h-8 pl-2 w-12 transition-all duration-300 ease-in-out ${isFocused ? 'w-48' : 'w-12'} pl-8`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
    
    {/* Search Icon inside the input */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  </div>
  <Link href="/profil/exMenu/galeri" className="px-2">Galeri</Link>
  <Link href="/profil/exMenu/dokumen" className="px-2">Dokumen</Link>
</div>

    </nav>
  );
}
