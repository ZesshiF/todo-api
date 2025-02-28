# todo-api
## Getting Started

To initialize this API, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/todo-api.git
    cd todo-api
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the necessary environment variables. Refer to `.env.example` for the required variables.

4. **Run database migrations**:
    ```sh
    npx sequelize-cli db:migrate
    ```

5. **Start the server**:
    ```sh
    npm start
    ```

Your API should now be running on `http://localhost:3000`.

## Tasks

1. สร้าง API สําหรับใช้งานในระบบ To-Do List ตาม API Spec
    - [✔️] a. API ยืนยันตัวตนเข้าใช้งานระบบ จะต้องได้รับ Access Token เมื่อยืนยันตัวตนสําเร็จ
    - [✔️] b. API CRUD สําหรับจัดการข้อมูลบัญชีผู้ใช้งานระบบ
    - [✔️] c. API CRUD สําหรับจัดการข้ลมูลงาน
    - [ ] d. API แสดงข้อมูลงานพร้อมข้อความคิดเห็นที่เกี่ยวกับงาน
    - [ ] e. API สร้างข้อมูลความคิดเห็นที่เกี่ยวกับงาน
    - [ ] f. API แก้ไขข้อมูลความคิดเห็นที่เกี่ยวกับงาน
    - [ ] g. API ลบข้อมูลความคิดเห็นที่เกี่ยวกับงาน
2. สร้าง Middleware เพื่อตรวจสอบการได้รับอนุญาตใช้งาน API หากไม่ได้รับการอนุญาต ให้ Response Http Status 401
    - [✔️] สร้าง Middleware เพื่อตรวจสอบการได้รับอนุญาตใช้งาน API หากไม่ได้รับการอนุญาต ให้ Response Http Status 401

## Preview
