import LaunchIcon from '@material-ui/icons/Launch'
import './CertificatesContainer.css'

const CertificatesContainer = ({ certificate }) => (
  <div className='certificate btn--plain'>
    <h3>{certificate.name}</h3>

    <a href={certificate.link} target='_blank' rel='noopener noreferrer'>
      <img src={certificate.photo} alt=''/>
    </a>

    <p className='certificate__time'>{certificate.time}</p>

    {certificate.link && (
      <a
        href={certificate.link}
        aria-label='source code'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}

  </div>
)

export default CertificatesContainer
