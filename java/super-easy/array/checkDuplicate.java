import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class checkDuplicate {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(1);
        boolean hasDuplicate = checkForDuplicates(list);
        System.out.println("List has duplicates: " + hasDuplicate);
    }

    public static boolean checkForDuplicates(List<Integer> list) {
        Set<Integer> set = new HashSet<>();
        for (int num : list) {
            if (set.contains(num)) {
                return true; // Duplicate found
            }
            set.add(num);
        }
        return false;
    }
}
