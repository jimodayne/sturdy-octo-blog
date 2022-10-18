import admin, { ServiceAccount } from 'firebase-admin'

const backend_key = process.env.BACKEND_SECRET_KEY || '{}'
const serviceAccount = JSON.parse(backend_key) as ServiceAccount

if (!admin.apps.length) {
    try {
        if (process.env.NODE_ENV === 'development') {
            process.env['FIRESTORE_EMULATOR_HOST'] = 'localhost:8080'
        }
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        })
    } catch (error) {
        console.log('Firebase admin initialization error', error)
    }
}

const db = admin.firestore()
const auth = admin.auth()

export { db, auth, admin }
