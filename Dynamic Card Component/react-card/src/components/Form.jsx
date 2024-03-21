import styled from 'styled-components';
const Form = () => {
  return (
    <main className="formRead">
        <div>
            <form action="">
                <label htmlFor="image" name="image" className='frm-img'>Pick a image</label>
                <input type="file" name="image" />
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />
                <label htmlFor="Description">Description</label>
                <textarea name="description" rows="5" className='txt-area'/>
                
                <div className="btns">
                    <button >Submit</button>
                </div>
            </form>
        </div>
    </main>
  )
}

export default Form;

const formRead  = styled.div`

`;