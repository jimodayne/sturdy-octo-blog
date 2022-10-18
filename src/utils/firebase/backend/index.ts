import admin, { ServiceAccount } from 'firebase-admin'

const serviceAccount = process.env.BACKEND_SECRET_KEY || {}

if (!admin.apps.length) {
    try {
        if (process.env.NODE_ENV === 'development') {
            process.env['FIRESTORE_EMULATOR_HOST'] = 'localhost:8080'
        }
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as ServiceAccount),
        })
    } catch (error) {
        console.log('Firebase admin initialization error', error)
    }
}

const db = admin.firestore()
const auth = admin.auth()

export { db, auth }
