# todo-api
## เริ่มต้นใช้งาน

ในการเริ่มต้นใช้งาน API นี้ ให้ทำตามขั้นตอนดังนี้:

1. **โคลน repository**:
    ```sh
    git clone https://github.com/ZesshiF/todo-api.git
    cd todo-api
    ```

2. **ติดตั้ง dependencies**:
    ```sh
    npm install
    ```

3. **ตั้งค่าตัวแปรสภาพแวดล้อม**:
    สร้างไฟล์ `.env` ในโฟลเดอร์หลักและเพิ่มตัวแปรenvironmentที่จำเป็น อ้างอิงจาก `.env.example` สำหรับenvironmentที่ต้องการ

4. **รันการย้ายฐานข้อมูล**:
    ```sh
    npx sequelize-cli db:migrate
    ```

5. **เริ่มต้นเซิร์ฟเวอร์**:
    ```sh
    npm start
    ```

API ควรจะทำงานที่ `http://localhost:3000`

## งาน

1. สร้าง API สำหรับใช้งานในระบบ To-Do List ตาม API Spec
    - [✔️] a. API ยืนยันตัวตนเข้าใช้งานระบบ จะต้องได้รับ Access Token เมื่อยืนยันตัวตนสำเร็จ
    - [✔️] b. API CRUD สำหรับจัดการข้อมูลบัญชีผู้ใช้งานระบบ
    - [✔️] c. API CRUD สำหรับจัดการข้อมูลงาน
    - [✔️] d. API แสดงข้อมูลงานพร้อมข้อคิดเห็นที่เกี่ยวกับงาน
    - [✔️] e. API สร้างข้อมูลความคิดเห็นที่เกี่ยวกับงาน
    - [✔️] f. API แก้ไขข้อมูลความคิดเห็นที่เกี่ยวกับงาน
    - [✔️] g. API ลบข้อมูลความคิดเห็นที่เกี่ยวกับงาน
2. สร้าง Middleware เพื่อตรวจสอบการได้รับอนุญาตใช้งาน API หากไม่ได้รับการอนุญาต ให้ Response Http Status 401
    - [✔️] สร้าง Middleware เพื่อตรวจสอบการได้รับอนุญาตใช้งาน API หากไม่ได้รับการอนุญาต ให้ Response Http Status 401

## Api Docs
[API Documents](https://documenter.getpostman.com/view/29494935/2sAYdhJViN)
