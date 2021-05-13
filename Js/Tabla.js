function imprimir() {
  document.getElementById("print-table").innerHTML = "";

  let i = 0;
  while (i <= 20) {
    let bodyTabla = `<tr>
         <th class="table-secondary" scope="row">${i}</th>
         <td class="table-info"hola${i}</td>
         <td class="table-info">8749${i}</td>
         <td class="table-info">@hola${i}</td>
         <td class="table-info">322452736${i}</td>
       </tr>`;

    console.log(i);

    document.getElementById("print-table").innerHTML += bodyTabla;

    /* De 2 en 2*/
    i ++;
    i ++;
  }
}
