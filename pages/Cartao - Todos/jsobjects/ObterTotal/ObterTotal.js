export default {
	soma : Select_All.data.reduce((acumulador, objeto) => acumulador + Number(objeto.Valor), 0)
}