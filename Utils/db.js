import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "localhost",
    user: "zaray_2894667",
    password: "Aprendiz2024",
    database: "tablasEvento_2894667 "
})

export default connection;