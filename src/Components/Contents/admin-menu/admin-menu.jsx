export default function AdminMenu() {
    function getPhoto() {
        fetch('file:///home/david/Desktop/storage/photo-1508921912186-1d1a45ebb3c1.png', {
            method: 'GET',
            headers: {
                'Content-Type': 'image/png',
            },
        })
    }

    return (
        <div>
            <h2>Заяви</h2>
            <table>
                <tr>
                    <th>Email</th>
                    <th>Фото студенського квiтка</th>
                </tr>
                <tr>
                    <td>email</td>
                    <td onClick={getPhoto}>фото</td>
                </tr>
            </table>
        </div>
);
}