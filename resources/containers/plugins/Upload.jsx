import InputUpload from '../../components/forms/InputUpload.jsx'

const ContainerUpload = () => 
  <React.Fragment>
    <div className="container">
      <h4>Upload contra servicio REST</h4>
      <InputUpload 
        urlREST={BASE_URL + 'upload/file'} 
        fileKey='file' 
        maxSize={500000}
        extensions={['image/jpeg', 'image/png', 'image/jpg']}
      />
    </div>
  </React.Fragment>

export default ContainerUpload