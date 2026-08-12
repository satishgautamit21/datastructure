package java.easy.string;

public class swapVowel {
    public static void main(String[] args) {
        String str = "hello world";
        String swappedStr = swapVowels(str);
        System.out.println("Original string: " + str);
        System.out.println("String after swapping vowels: " + swappedStr);
    }

    public static String swapVowels(String str) {
        char[] chars = str.toCharArray();
        int left = 0;
        int right = chars.length - 1;

        while (left < right) {
            while (left < right && !isVowel(chars[left])) {
                left++;
            }
            while (left < right && !isVowel(chars[right])) {
                right--;
            }
            if (left < right) {
                // Swap vowels
                char temp = chars[left];
                chars[left] = chars[right];
                chars[right] = temp;
                left++;
                right--;
            }
        }

        return new String(chars);
    }

    private static boolean isVowel(char c) {
        c = Character.toLowerCase(c);
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }
}
