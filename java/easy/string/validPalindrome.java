package java.easy.string;

public class validPalindrome {
    public static void main(String[] args) {
        String str = "A man, a plan, a canal: Panama";
        boolean isPalindrome = isValidPalindrome(str);
        System.out.println("Is the string a valid palindrome? " + isPalindrome);

    }

    // No regex just use lowercase and check for alphanumeric characters
    public static boolean isValidPalindrome(String str) {
        str = str.toLowerCase();
        int left = 0;
        int right = str.length() - 1;

        while (left < right) {
            while (left < right && !isAlphaNumeric(str.charAt(left))) {
                left++;
            }
            while (left < right && !isAlphaNumeric(str.charAt(right))) {
                right--;
            }
            if (str.charAt(left) != str.charAt(right)) {
                return false; // Not a palindrome
            }
            left++;
            right--;
        }

        return true; // Is a palindrome
    }

    private static boolean isAlphaNumeric(char c) {
        return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    }
}
