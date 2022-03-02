import sty from 'styled-components'

const Container = sty.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 40px 40px;
    width: 100%;
    form {
        max-width: 400px;
        input {
            border: 1px solid #1C658C;
            border-radius: 15px;
            padding: 5px 10px;
            
        }
        input:focus {
            outline: none;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            border: 1px solid #398AB9;
        }
    }

`

export default Container