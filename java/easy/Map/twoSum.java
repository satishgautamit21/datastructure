package java.easy.Map;
// use hashmap to store the numbers and their indices
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

public class twoSum {
   public static void main(String[] args) {
        List<Integer> nums = new ArrayList<>(List.of(2, 7, 11, 15));
        int target = 9;
        List<Integer> result = gettwoSum(nums, target);
        System.out.println("Indices of the two numbers that add up to " + target + ": [" + result.get(0) + ", " + result.get(1) + "]");
    }

    public static List<Integer> gettwoSum(List<Integer> nums, int target) {
        HashMap<Integer, Integer> numMap = new HashMap<>();
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums.get(i);
            if (numMap.containsKey(complement)) {
                return new ArrayList<>(List.of(numMap.get(complement), i));
            }
            numMap.put(nums.get(i), i);
        }
        return new ArrayList<>(List.of(-1, -1));
    }
}
