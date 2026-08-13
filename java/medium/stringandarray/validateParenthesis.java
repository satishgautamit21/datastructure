package java.medium.stringandarray;
import java.util.Stack;
import java.util.HashMap;
import java.util.Map;

public class validateParenthesis {
    public static void main(String[] args) {
        String s = "({[]})";
        boolean isValid = isValidParenthesis(s);
        System.out.println("Is the string \"" + s + "\" valid? " + isValid);
    }

    public static boolean isValidParenthesis(String s) {
        Stack<Character> stack = new Stack<>();
        Map <Character, Character> map = new HashMap<>();
        map.put(')', '(');
        map.put('}', '{');
        map.put(']', '[');

        for (char c : s.toCharArray()) {
            if (map.containsValue(c)) {
                stack.push(c);
            } else {
                if (stack.isEmpty()) {
                    return false;
                }
                char top = stack.pop();
                if (top != map.get(c)) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
    
}
