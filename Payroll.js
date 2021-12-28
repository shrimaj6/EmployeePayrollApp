window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});

const createInnerHTML = () => {
    if (empPayrollList.length == 0) return;
    const headerHtml = "<th>Name</th><th>Gender</th><th>Department</th>"+
                     "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
    <tr>
    <td><img class="profile" src="../html/assets/profile-images/Ellipse -2.png" alt="">Shrimaj Mehta</td>
    <td>Male</td>
    <td>
        <div class='dept-label'>Engineer</div>
        <div class='dept-label'>Development</div>
    </td>
    <td>500000</td>
    <td>24 Sept 2021</td>
    <td>
        <img id="1" onclick="remove(this)" src="../html/delete1.jpeg" alt="delete">
        <img id="1" onclick="update(this)" src="../html/update1.jpeg" alt="update"> 
    </td>
</tr>
      `;
    document.querySelector("#table-display").innerHTML = innerHtml;
}