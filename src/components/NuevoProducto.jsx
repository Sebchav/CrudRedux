

const { crearNuevoProductoAction } = from "../actions"
const NuevoProducto = () => {
  return (
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body"> 
                    <h2 className="text-center mb4 font-weight-bold">
                        Agregar Nuevo Producto
                    </h2>

                    <form>
                        <div className="form-group">
                            <label htmlFor="">Nombre Producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Producto"
                                name="nombre"
                             />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Precio Producto</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Precio Producto"
                                name="precio"
                             />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        >Agregar</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NuevoProducto