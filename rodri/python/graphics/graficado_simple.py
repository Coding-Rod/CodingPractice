from bokeh.plotting import figure, output_file, show

if __name__ == '__main__':
    outputfile = ('simple_graphic.html')
    fig = figure()

    total_vals = int(input('Cuantos valores quieres graficar? '))
    x_vals = list(range(total_vals))
    y_vals = [input('Ingrese un valor: ') for _ in x_vals]

    fig.line(x_vals, y_vals, line_width=2)
    show(fig)