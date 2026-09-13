//Merge two sorted linked lists

import java.util.*;

class Node{
    int data;
    Node next;
    Node(int data){
        this.data=data;
        this.next=null;
    }
}
public class MergeTwoSortedLinkedList{
    Node head=null;
    Node tail=null;
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
		Node list1=null;
		Node list2=null;
		int n1 = sc.nextInt();
		for(int i=0; i<n1; i++) {
			list1=insertll(list1, sc.nextInt());
		}
		int n2 = sc.nextInt();
		for(int i=0; i<n2; i++) {
			list2=insertll(list2, sc.nextInt());
		}
        Node result = MergeTwoLists(list1,list2);
        display(result);
    }
    public static Node insertll(Node head, int data) {
		Node newNode = new Node(data);
		if(head==null) {
			return newNode;
		}
		Node temp=head;
		while(temp.next!=null) {
			temp=temp.next;
		}
		temp.next=newNode;
		return head;
	}
    public static Node MergeTwoLists(Node list1,Node list2){
        Node dummy = new Node(0);
        Node current = dummy;
        while(list1!=null && list2!=null){
            if(list1.data<=list2.data){
                current.next=list1;
                list1=list1.next;
            }else{
                current.next=list2;
                list2=list2.next;
            }
            current=current.next;
        }
        if(list1!=null){
            current.next=list1;
        }else{
            current.next=list2;
        }
        return dummy.next;
    }
    public static void display(Node head) {
		Node temp=head;
		while(temp!=null) {
			System.out.print(temp.data+" ");
			temp=temp.next;
		}
		System.out.println();
	}
}
