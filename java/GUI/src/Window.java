import java.awt.Font;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class Window extends JFrame {
    private JPanel panel;
    private JLabel greeting;
    private JTextField textBox;
    private JButton button;
    

    public Window() {
        setBounds(50, 50, 500, 500);
        setTitle("Events");

        setComponents();

        setDefaultCloseOperation(EXIT_ON_CLOSE);
    }

    private void setComponents() {
        setPanel();
        setTag();
        setTextBox();
        setCheckBox();
    }

    private void setPanel() {
        panel = new JPanel();
        panel.setLayout(null);
        this.add(panel);
    }

    private void setTag() {
        JLabel tag = new JLabel();
        tag.setBounds(10, 50, 200, 30);
        tag.setText("Ingrese su nombre");
        tag.setFont(new Font("arial", Font.BOLD, 16));
    }

    private void setTextBox() {
        
    }

    private void setCheckBox() {
        
    }
}
