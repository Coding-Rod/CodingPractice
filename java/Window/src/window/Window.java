package window;

import javax.swing.ButtonGroup;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.SwingConstants;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Image;

public class Window extends JFrame{
    public JPanel panel;

    public Window() {
        this.setSize(600,400); // Screen size
        // this.setLocation(100, 720); // Screen position
        // this.setBounds(100, 720, 600, 400); // Screen bounds
        this.setLocationRelativeTo(null); // Null == center position
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setTitle("El mejor titulo");

        // this.setResizable(false);
        this.setMinimumSize(new Dimension(200,200));
        

        setComponents();
    }

    private void setComponents() {
        setPanel();
        // setTags();
        // setButtons();
        // setRadioButtons();
        // setTextboxes();
        // setTextArea();
        setListView();
    }

    private void setButtons() {
        //#region button1
        JButton button1 = new JButton();
        button1.setBounds(100, 100, 100, 40);
        button1.setText("Click");
        button1.setForeground(Color.BLUE);
        button1.setFont(new Font("Arial", Font.BOLD, 16));
        button1.setBackground(Color.GRAY);
        // button1.setEnabled(false);
        button1.setMnemonic('a'); //Alt + key
        panel.add(button1);
        //#endregion button1
    
        //#region button2
        JButton button2 = new JButton();
        button2.setBounds(100, 200, 100, 40);

        ImageIcon clickHere = new ImageIcon("/home/rodri/Documents/Java/Window/assets/button.png");
        button2.setIcon(new ImageIcon(clickHere.getImage().getScaledInstance(button2.getWidth(), button2.getHeight(), Image.SCALE_SMOOTH)));

        button2.setBackground(Color.BLUE);
        panel.add(button2);
        //#endregion button2
    
        
    }

    private void setPanel() {
        //#region panel
        panel = new JPanel();

        panel.setLayout(null); // Erase default Layout
        // panel.setBackground(Color.GREEN);
        this.getContentPane().add(panel);
        //#endregion panel
    }
    
    private void setTags() {
         //#region Text
        // JLabel tag = new JLabel("Hola"); // Create new tag
        // JLabel tag = new JLabel("Hola", SwingConstants.CENTER); // Create new tag
        JLabel tag = new JLabel(); // Create new tag
        
        tag.setText("Mundial 2018");
        tag.setBounds(85, 10, 400, 80);
        tag.setHorizontalAlignment(SwingConstants.CENTER);
        tag.setForeground(Color.BLACK);
        // tag.setOpaque(true); // Erase default layout
        // tag.setVerticalAlignment(SwingConstants.TOP);
        // tag.setBackground(Color.CYAN);
        
        tag.setFont(new Font("cooper black", Font.BOLD, 40)); // Bold: 1, Italic: 2, Bold and italic: 3
        panel.add(tag);
        //#endregion Text
        
        //#region image
        ImageIcon image = new ImageIcon("/home/rodri/Documents/Java/Window/assets/mundial_ball.jpg");

        JLabel tag2 = new JLabel(image); // Its is posible to use setIcon as well
        tag2.setBounds(10, 80, 400, 400);
        tag2.setIcon(new ImageIcon(image.getImage().getScaledInstance(tag2.getWidth(), tag2.getHeight(), Image.SCALE_SMOOTH)));
        panel.add(tag2);

        //#endregion image
    
    }

    private void setRadioButtons() {
        JRadioButton radiobutton1 = new JRadioButton("Opcion 1", false);
        radiobutton1.setBounds(50, 100, 100, 50);

        panel.add(radiobutton1);

        JRadioButton radiobutton2 = new JRadioButton("Opcion 2", false);
        radiobutton2.setBounds(50, 150, 100, 50);
        panel.add(radiobutton2);

        JRadioButton radiobutton3 = new JRadioButton("Opcion 3", false);
        radiobutton3.setBounds(50, 200, 100, 50);
        panel.add(radiobutton3);

        ButtonGroup radioButtonGroup = new ButtonGroup();
        radioButtonGroup.add(radiobutton1);
        radioButtonGroup.add(radiobutton2);
        radioButtonGroup.add(radiobutton3);
        radioButtonGroup.getButtonCount();
    }

    private void setTextboxes() {
        // JTextField textBox = new JTextField("Hola",20);
        JTextField textBox = new JTextField();
        textBox.setBounds(50, 50, 200, 30);
        textBox.setText("Hello...");

        System.out.println("Box text: "+textBox.getText());
        panel.add(textBox);
    }

    private void setTextArea() {
        JTextArea textArea = new JTextArea();
        textArea.setBounds(20, 20, 300, 200);
        textArea.setText("Escriba el texto aqui...");
        textArea.append("\nEscribe por aqui...");
        // textArea.setEditable(false);

        System.out.println("El texto es: "+textArea.getText());
        panel.add(textArea);
    }
    
    private void setListView() {
        String [] countries = {"USA", "Colombia", "Mexico", "Bolivia"};

        JComboBox listCombo1 = new JComboBox(countries);
        listCombo1.setBounds(20, 20, 100, 30);

        listCombo1.addItem("Ecuador");
        listCombo1.removeItem("USA");

        listCombo1.setSelectedItem("Mexico");

        panel.add(listCombo1);

    }
}
