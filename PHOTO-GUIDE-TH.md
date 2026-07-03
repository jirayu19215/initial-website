# คู่มือใส่รูปภาพลงเว็บไซต์ INITIAL

## 1. รูปรถแต่ละคัน (จาก D:\Car)

คัดลอกรูปจาก `D:\Car` มาไว้ที่ `public/cars/<slug>/` แล้วตั้งชื่อไฟล์เป็นตัวเลขเรียงลำดับ:

```
public/cars/inixii/1.jpg
public/cars/inixii/2.jpg
public/cars/inixii/3.jpg
...
```

slug ของแต่ละคัน (โฟลเดอร์ที่สร้างไว้แล้ว 3 อัน ที่เหลือสร้างเพิ่มได้เลย):

| ปี | รถ | โฟลเดอร์ (slug) |
|---|---|---|
| 2026 | Coming Soon | `kmitl-2026` ✅ |
| 2025 | INIXII | `inixii` ✅ |
| 2024 | TARANTULA EV3 | `tarantula-ev3` ✅ |
| 2023 | RAUBTIER II | `raubtier-ii` |
| 2022 | RAUBTIER I | `raubtier-i` |
| 2019 | KF2020 | `kf2020` |
| 2018 | KF2018 | `kf2018-2018` |
| 2017 | KF2018 | `kf2018-2017` |
| 2016 | King Scorpio | `king-scorpio` |
| 2015 | Scorpio | `scorpio` |
| 2014 | Brutax MK2 | `brutax-mk2` |
| 2013 | Brutax | `brutax` |
| 2012 | King Python | `king-python` |
| 2011 | Mobius | `mobius` |
| 2010 | Python | `python` |
| 2009 | KF2009 | `kf2009` |
| 2008 | Kabuto | `kabuto` |
| 2007 | Quinto | `quinto` |
| 2006 | Mantisa | `mantisa` |
| 2005 | Blackcat | `blackcat` |

**สำคัญ:** หลังใส่รูปแล้ว ต้องแก้ตัวเลข `photoCount` ใน `src/lib/cars-data.ts` ให้ตรงกับจำนวนรูป เช่น ใส่รูป INIXII ไป 5 รูป:

```ts
{ slug: 'inixii', year: '2025', model: 'INIXII', type: 'EV', photoCount: 5, ... }
```

รูปจะแสดงในหน้า `/cars/inixii` อัตโนมัติ

## 2. แกลเลอรีหน้า Cars

ตอนนี้หน้า /cars ใช้รูป `car_1.jpg` ถึง `car_4.jpg` + `DSC05116.jpg` + `Race2569-302.jpg` ที่มีอยู่แล้ว
ถ้าอยากเพิ่ม ให้ใส่รูปใน `public/gallery/` แล้วแก้ array รูปใน `src/app/cars/page.tsx` (ส่วน Gallery)

## 3. รูปทีม

- รูปสมาชิก: ใส่ใน `public/member/` (มีอยู่แล้วบางคน) แล้วแก้ path ใน `src/app/team/page.tsx`
- รูปหมู่ทีม: หน้า About ตอนนี้ใช้ `Race2569-302.jpg` ชั่วคราว — ถ้ามีรูปหมู่จริง ให้บันทึกเป็น `public/team/team-photo.jpg` แล้วแก้ path ใน `src/app/about/page.tsx`

## 4. ดาวน์โหลดรูปจาก IG / Facebook

- Facebook: facebook.com/initialteam → เปิดรูปที่ต้องการ → คลิกขวา → Save image as
- Instagram: instagram.com/initialformula.kmitl และ instagram.com/initial.team → เปิดโพสต์ในเบราว์เซอร์ → ใช้รูปความละเอียดสูงสุดที่มี
- แนะนำรูปแนวนอน ขนาดอย่างน้อย 1600px สำหรับ hero/background และบีบอัดเป็น .jpg คุณภาพ ~80 เพื่อให้เว็บโหลดเร็ว

## 5. รูปที่เว็บใช้อยู่ตอนนี้ (อย่าลบ)

`DSC05116.jpg` (hero หน้าแรก), `Race2569-302.jpg` (ผลแข่ง + about), `DSCF5192.jpg` (พื้นหลังหน้ารถแต่ละคัน), `car_1.jpg`–`car_4.jpg`, `fsc-competition.jpg`, `TSAE.avif`, `logo/logo_initail.png`, `member/*`, `sponsor/*`, `model_car/Body Design 2-4.glb`

## 6. สิ่งที่อัปเดตในรอบนี้

- ดีไซน์ใหม่: ปุ่มทรงเฉียงเรืองแสง, ข้อความไล่สีแดง→ฟ้า, การ์ดกระจก (glassmorphism), เส้น speed line, ตัวเลขนับขึ้น (animated counter), เอฟเฟกต์เลื่อนแล้วค่อยปรากฏ (reveal on scroll), แถบโลโก้สปอนเซอร์เลื่อนอัตโนมัติ, ลายกริด/คาร์บอน
- แก้ข้อมูลเก่า "KMITL-FS01" (สเปกสมมติ 85 kW / 14.4 kWh) → เป็น **INIXII** สเปกจริงทั้งหน้าแรกและหน้า Cars
- ปฏิทินแข่ง 2026: TSAE Auto Challenge 2026 (จบแล้ว — ผลครบ) + Formula Student China 2026 (13–18 ต.ค.)
- ข่าวอัปเดตเป็นผลแข่งปี 2026 จริง
- เพิ่มฟอนต์ IBM Plex Sans Thai รองรับภาษาไทย
- แก้แกลเลอรีที่ชี้ไปรูปที่ไม่มีอยู่ (`/gallery/gallery_N.jpg`) ให้ใช้รูปจริง
