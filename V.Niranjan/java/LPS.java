//Find the longest palindromic substring in a string 

import java.util.*;
public class LPS {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String s=sc.nextLine();
		String res=longpalinsub(s);
		System.out.println(res);
	}
	public static String  longpalinsub(String s) {
		String t = new StringBuilder(s).reverse().toString();
		return sumsub(s,t);
	}
	public static String sumsub(String s,String t) {
		int n = s.length();
		int m = t.length();
		int[][] dp = new int[n+1][m+1];

		for(int i=1; i<=n; i++) {
			for(int j=1; j<=m; j++) {
				if(s.charAt(i-1)==t.charAt(j-1)) {
					dp[i][j]=1+dp[i-1][j-1];
				}else {
					dp[i][j]=Math.max(dp[i-1][j], dp[i][j-1]);
				}
			}
		}
		int len=dp[n][m];
		int index=len-1;
		StringBuilder sb = new StringBuilder();
		for(int i=0; i<len; i++) {
			sb.append("$");
		}
		int i=n;
		int j=m;
		while(i>0 && j>0) {
			if(s.charAt(i-1)==t.charAt(j-1)) {
				sb.setCharAt(index, s.charAt(i-1));
				index--;
				i--;
				j--;
			}else if(dp[i-1][j]>dp[i][j-1]) {
				i--;
			}else {
				j--;
			}
		}
		return sb.toString();
	}
}
