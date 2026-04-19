// ==========================================
// วิธีใช้งาน Google Apps Script
// ==========================================
// 1. ไปที่ https://sheets.new เพื่อสร้าง Google Sheet ใหม่
// 2. ตั้งชื่อ Sheet เช่น "KMITL-FS Orders"
// 3. ใส่ header แถวแรก:
//    A1: Timestamp  B1: Product  C1: ชื่อ  D1: เบอร์โทร
//    E1: Email  F1: ไซส์  G1: จำนวน  H1: ที่อยู่  I1: หมายเหตุ
//
// 4. ไปที่ Extensions → Apps Script
// 5. ลบโค้ดเดิมออก แล้ววางโค้ดด้านล่างนี้ทั้งหมด
// 6. กด Save → Deploy → New Deployment
//    - Type: Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 7. กด Deploy → Copy URL ที่ได้
// 8. นำ URL ไปใส่ใน .env.local:
//    NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/xxxxx/exec
// ==========================================

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp,
      data.product,
      data.name,
      data.phone,
      data.email,
      data.size,
      data.quantity,
      data.address,
      data.notes ?? '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ทดสอบว่า Script ทำงานได้ (ใช้ Run → doGet ใน Apps Script editor)
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'KMITL-FS Order API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
