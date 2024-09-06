import GetProdutos from '../Produtos/getProdutos.js';
import GetUsuarios from '../Usuarios/getUsuarios.js';

export default function FluxoPrincipal() {
    GetProdutos();
    GetUsuarios();
}