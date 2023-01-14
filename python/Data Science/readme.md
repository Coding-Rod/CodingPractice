# Configuración Profesional de Entorno de Trabajo para ciencia de Datos

## Ventajas de utilizar plantillas

* Reducen fatiga por decisión
* Personalizar es más fácil que construir de cero
* La reproducibilidad se vuelve mucho más factible
* Encontrar las cosas se vuelve más sencillo

## Cómo usar una plantilla

1. Abre una terminal en Deepnote
2. Ejecuta

    ```python
    pip install cookiecutter
    ```

3. Ejecuta

    ```python
    cookiecutter -c v1 https://github.com/drivendata/cookiecutter-data-science
    ```

## Anaconda

### List environments

```bash
conda env list
```

### List libraries

```bash
conda list
```

### Activate virtual environment

```bash
conda activate _virtualenv_
```

### Create virtual environment

```bash
conda create --name _virtualenv_ _dependencies_
```

### Remove virtual environment

```bash
conda env remove --name _virtualenv_
```

### Clone

```bash
conda create --name _virtualenv2_ --copy --clone _virtualenv_
```

### Quit conda

```bash
conda deactivate
```

### Install library

```bash
conda install _library_
// if it is not found
conda install --channel _channel_ _library_
```

### Uninstall library

```bash
conda remove _library_
```

### History

```bash
conda list --revision 
```

### Reset to revision

```bash
conda list --revision _index_
```

### Export libraries

```bash
conda env export 
conda env export --no-builds //without library codes
conda env export --form-history // just namually installed libraries
conda env export --form-history --file environment.yml// send to file
```

### Import yml file

```bash
conda env create --file environment.yml
`
