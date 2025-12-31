import style from './Table.module.css'

function Table(){
    return(
        <div className={style.tab}>
        <h1>Plan Comparison</h1>
        <table  >
            <tr>
            <th>features</th>
            <th>basic</th>
            <th>standard</th>
            <th>premium</th>
            </tr>
            <tr>
                <td>users</td>
                <td>1</td>
                <td>5</td>
                <td>unlimited</td>
            </tr>
            <tr>
                <td>projects</td>
                <td>5</td>
                <td>20</td>
                <td>unlimited</td>
            </tr>
            <tr>
                 <td>support</td>
                <td>email</td>
                <td>priority</td>
                <td>24/7</td>
            </tr>
        </table>
        </div>
    );
}
export default Table
