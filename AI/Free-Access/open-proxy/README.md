Install step by step

- Download file binary
- Buka system setting &gt; Privacy $ Security
- Scroll cari paling bawah open-proxy dan allow

![](orca-paste-1791525949603-edd9f08f-bf0b-4963-b01f-df07a411f475.png)

- Jalankan: chmod +x open-proxy
- Jalankan: ./open-proxy start
- Klik Open Anyway ( pertama kali di jalankan )

![](orca-paste-1791526223331-80586518-9c33-4cab-837c-a443c7abd663.png)



Login

Email: [admin@demo.com](mailto:admin@demo.com)

Pass: admin123



Setelah masuk ke dashboard

- Ke halaman provider &gt; Klik model

![](orca-paste-1791526555839-519a6022-cb90-45a6-950d-df96ad4baf87.png)

- Klik Test manual

![](orca-paste-1791526720448-2ec898d0-cf2c-4698-9708-3a33ac02e787.png)

( Kalau belum mau update opencode, kalau belum ada download  di github: curl -fsSL [https://opencode.ai/install](https://opencode.ai/install) | bash )

- Ke halaman API Key &gt; Buat API Key

- Kadaluwarsa ~ ( unlimited )
- Model &gt; Satu model &gt; Buat Key

![](orca-paste-1791528910310-9ede5ff4-ade0-4691-af81-0e1da01b8fa7.png)

- Salin token ( simpan dan paste di tempat paling aman di device anda )



&nbsp;

Set di device

- Copy example env &gt; salin di folder yang sama dimana anda akan jalankan claude nya
- Jalankan envman -e .env.claude -- claude

