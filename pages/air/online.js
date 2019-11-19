import { useEffect, useState } from 'react'
import orderBy from 'lodash/orderBy'
import moment from 'moment-timezone'
import { firebase } from '../../lib/firebase'

const Demo = () => {
  const [records, setRecords] = useState([])
  useEffect(() => {
    var ref = firebase.database().ref('/online')
    ref.on('value', snapshot => {
      const recordObject = snapshot.val()
      if (recordObject) {
        let arr = Object.keys(recordObject).map(key => ({
          ...recordObject[key]
        }))
        arr = orderBy(arr, ['createdAt'], ['desc'])
        setRecords(arr)
      } else {
        setRecords([])
      }
    })

    return () => ref.off()
  }, [])

  // console.log(new Date(), geojson);

  return (
    <>
      <section className='section' style={{ paddingBottom: 0 }}>
        <div className='container'>
          <table className='table is-bordered is-striped is-hoverable is-fullwidth'>
            <thead>
              <tr>
                <th>#</th>
                <th>createdAt</th>
                <th>deviceId</th>
                <th>ip</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>#</th>
                <th>createdAt</th>
                <th>deviceId</th>
                <th>ip</th>
              </tr>
            </tfoot>
            <tbody>
              {records.map((record, index) => (
                <tr key={record.id}>
                  <td>{index + 1}</td>
                  <td>{moment(record.createdAt).tz('Asia/Macau').format('YYYY-MM-DD HH:mm:ss')}</td>
                  <td>{record.deviceId}</td>
                  <td>{record.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

Demo.getInitialProps = () => ({})

export default Demo
