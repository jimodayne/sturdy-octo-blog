import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from './blogs-2c885-firebase-adminsdk-9ur27-7b301628e8.json'

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
