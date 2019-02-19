
public class Instructions {

	// Starting address
	private int start_address = 0x9A040;

	// Machine instructions to be disassembled
	private int hex_code[] = { 0x032BA020, 0x8CE90014, 0x12A90003, 0x022DA822, 0xADB30020,
			0x02697824, 0xAE8FFFF4, 0x018C6020, 0x02A4A825, 0x158FFFF7, 0x8ECDFFF0 };
	

	public int[] getHexCode() {
		return hex_code;
	}

	
	public int getStartAddress() {
		return start_address;
	}
	
//	public static void printS(int[] hex_code) {
//		for (int i = 0; i < hex_code.length; i++) {
//			System.out.printf("%x\n", hex_code[i]);
//		}
//	}
//	
//	
//	public static void main(String args[]) {
//		
//		System.out.printf("%x\n\n", 0x032BA020);
//		System.out.printf("%02x, %02x", 15, 16);
//		System.out.printf("%s", Integer.toBinaryString(0x032BA020));
		
//		Instructions i = new Instructions();
//		printS(i.getHexCode());
//		
//	}

	/*
	private int binary_code[] =
	  { 00000011001010111010000000100000,
		10001100111010010000000000010100,
		00010010101010010000000000000011,
		00000010001011011010100000100010,
		10101101101100110000000000100000,
		00000010011010010111100000100100,
		10101110100011111111111111110100,
		00000001100011000110000000100000,
		00000010101001001010100000100101,
		00010101100011111111111111110111,
		10001110110011011111111111110000 };
	*/

}