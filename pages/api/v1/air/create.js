import admin from 'firebase-admin'

const serviceAccount = {
  type: 'service_account',
  project_id: 'macauiot-air-demo',
  private_key_id: 'a989e405b6488a9c61e5ea9bc6e67fe8e509ba8b',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDb8XvUtI1mKs8j\niGfmkOnbVfa0tNu3MdO3Xt40V/9hB3Wr/0baoo62Na1ASRNZPMaeNkz0yxKOgUUt\nD04EI6lz3zHBMscfPCRfQiVgZiMK6guA2cJJ8hm+SjK0wFvehdF49QOfgGJdlfxg\nQL2mUl71zx3J1W9KzjuX8JM/GgzCjqCjRoqoMDpCmLVsQjU6WM2EhJNm5onW8LFc\nQuxNZgVHHnpxH7mfq79DHL9xfWcWrfK8jnl5B8puZI1BmskPuxZpn9I2zTR1+HK+\n03b6uQ5uTJSUK/AFa362sZPdulL5ulbhVclyGmcOcBc//KE9qs2GWjBMcqKtr8AW\nkSEF0GefAgMBAAECggEARIDGDM3fbH7Q3URS+CESdVok6Mub00cVpftKQgtWYyYr\npFJyAw62XFIDkA4ylIy1X/mRpnzJXtEsdohZyDhDQu+1U3M5SaU1vuWfNpMZPwD+\nbDdmqBlbo0UA3gM7meccAwxtAHTALl3UqTYA25i0MuM7Z+2uKCJrtTsc4X5/kui9\nkt98IjVg2/yz8M1lRCeHlNCUY0QmKBlSJm/ZP0MdT9HsDaaGTvICbyK3sucxa3tt\nMM1e6JFc/quGcxQ7BswtTr+yMwFriOh/fEkVWtXsJfHGALQxW6LHjGJbdckzXpUq\nn6HW6ELYYgLoOT2dvE9CYN4LdlgCak9BOqhPGpXt4QKBgQDxFJPtflC1abLMtky6\nZUsKHDyWr8AdarTvFF2xP2A4PkrtpkMsG1EW87FJL3u18BNQilsxyuOPUqNiBHUS\nrPlgGm57cdfYr75B2obvdC8M3pZFQGZwdmQSb5fhGitZhWR/OA2Kn6Gk+utuB2Nz\nRIiVA/lKA4QRj0nFUzilPHJ3cwKBgQDpjghCvf78LSiH+INgBhtPxOL8nfWxpkhf\nZ9OTdZyx24kauBEgvMmbzezoA+oPOs+ALielHcI8aY5vu9WexP4pWtGb9yE47fV1\nNXYYzxbJRrIYtwYJayh+MpvIO7/SekxlXy4tVnz2ymJehW4zHb4nptgkL4ELMfE/\nashIYTVMJQKBgE3f6dEDxqpzVFCQasSjR9QiPugmKZbXC09XctR4tmo0pRuTY4tx\n34Xcfl43umyQ+ow/xSmWcl+vwBs/eVnpCj0jDKFPqvvR+VFod8IN88zicgQ4w158\nv+K8rYEHZQ1r64S05Jrs6dhTPY2zUUrAzqXkPLjN3fGWKaxWL6wglJFFAoGBAMGu\nM1OF1Aq0OERp5iifZ87C66mqJLHpv2K+60oB4qvr7srlke6gIGDAaJIPjO6MSr91\nhxL6lrUapDAsiH5dxpfs5J5+VmKrkz5b00/HjJHlupOcU7lD0BS3S1DFm9Gj8e6u\n+9BFROQz+VeBN13UcHjZd6yqaE0sYW/B0c2UL2qxAoGAXP1YnGadFdqj8ozyf9P2\nR6adH8app+b6fJ6SPjodXAfU8TlkWacsuiKtTDbRaHOdXk6gbka6TeKZCD46CV3g\nt2w07iR2C4UEGLdNATHzTqB8zQ+9HjroF4VjPRT36GfutLkypvV/71IUrDkP1PEG\nLTiRxZNR2xbEv9x6YDXPpTU=\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-jz8ce@macauiot-air-demo.iam.gserviceaccount.com',
  client_id: '116317322472343150311',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jz8ce%40macauiot-air-demo.iam.gserviceaccount.com'
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://macauiot-air-demo.firebaseio.com'
  })
}

const db = admin.database()
const ref = db.ref('/')

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.json({
      error: 'only support POST method.'
    })
  }

  const { body = {} } = req

  if (!body.lat) {
    return res.json({
      error: 'body require lat.'
    })
  }
  if (!body.long) {
    return res.json({
      error: 'body require long.'
    })
  }
  if (!body['pm2.5']) {
    return res.json({
      error: 'body require pm2.5 value.'
    })
  }

  const newRecordRef = ref.push()
  var id = newRecordRef.key

  const data = {
    id,
    lat: parseFloat(body.lat),
    long: parseFloat(body.long),
    pm2p5: parseFloat(body['pm2.5']),
    pm10: body.pm10 ? parseFloat(body.pm10) : null,
    createdAt: Date.now()
  }

  await newRecordRef.set(data)

  return res.json({
    success: true,
    body,
    result: data
  })
}
