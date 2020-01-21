import InputUpload from '../../components/plugins/InputUpload.jsx'

const ContainerUpload = () => 
  <React.Fragment>
    <div className="container">
      <h4>Upload contra servicio REST</h4>
      <p><label>XD</label></p>
      <InputUpload 
        url={BASE_URL + 'upload/file'} 
        fileKey='file' 
        maxSize={500000}
        extensions={['image/jpeg', 'image/png', 'image/jpg']}
      />
    </div>
  </React.Fragment>

export default ContainerUpload