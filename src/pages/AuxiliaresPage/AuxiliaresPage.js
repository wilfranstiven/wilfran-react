const handleEliminar = async (id) => {
    const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás recuperar este registro!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    });
    const [auxiliares, setAuxiliares] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedAux, setSelectedAux] = useState(null);
    
    if (result.isConfirmed) {
        try {
            await deleteDoc(doc(db, 'usuarios', id));
            setAuxiliares(auxiliares.filter(a => a.id !== id));
            Swal.fire('Eliminado', 'Registro eliminado correctamente.', 'success');
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'No se pudo eliminar el registro.', 'error');
        }
    }
};

const handleEdit = (aux) => {
    setSelectedAux(aux);
    setShowModal(true);
};

const handleSaveChanges = async () => {
    try {
        const auxRef = doc(db, 'usuarios', selectedAux.id);
        await updateDoc(auxRef, {
            nombres: selectedAux.nombres,
            apellidos: selectedAux.apellidos,
            cedula: selectedAux.cedula,
            telefono: selectedAux.telefono,
            email: selectedAux.email,
            fechaNacimiento: selectedAux.fechaNacimiento,
            sexo: selectedAux.sexo,
            estado: selectedAux.estado
        });

        setAuxiliares(auxiliares.map(a =>
            a.id === selectedAux.id ? selectedAux : a
        ));

        setShowModal(false);
        Swal.fire('Actualizado', 'Los datos fueron actualizados.', 'success');
    } catch (error) {
        console.error(error);
        Swal.fire('Error', 'No se pudo actualizar.', 'error');
    }
};

const handleModalChange = (e) => {
    const { name, value } = e.target;
    setSelectedAux({
        ...selectedAux,
        [name]: value
    });
};

