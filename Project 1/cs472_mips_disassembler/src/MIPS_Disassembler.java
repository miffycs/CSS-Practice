
/**
 * Miffy Chen
 * MET CS472
 * 2018.02.15
 * Program 1 - MIPS Disassembler
 */

public class MIPS_Disassembler
{
	public static void main(String[] args)
	{
		/*
		 * switches System.out to a PrintStream
		 * starts reading every output until function is turned off by stop()
		 */
		ConsoleOutputCapturer readConsole = new ConsoleOutputCapturer();
		readConsole.start();
		
		
		/*
		 * opcode rs bits (25-21) rt bits (20-16) rd bits (15-11) Immediate bits(15-0)
		 */
		int val, rs = 0, rt = 0, rd = 0, opcode = 0;
		short immediate = 0;
		
		
		/*
		 * object containing instruction codes, so it's easier to switch out
		 * read machine instructions to be disassembled in hex format
		 */
		Instructions input = new Instructions();
		
		// first instruction begins at address hex 0x9A040
		int start_address = input.getStartAddress();
		
		// machine instructions to be disassembled
		int hex_code[] = input.getHexCode();
		
		
		// iterate over hex_code array,
		// pick each machine code instruction and evaluate it
		for (int hex : hex_code)
		{
			// print instruction address
			System.out.printf("0x%05x", start_address); //%x prints in hex
			
			// 0xFC000000 has first 6 bits set to 1
			// it will help extract opcode from machine code
			// shift it 26 times left
			opcode = (hex & 0xFC000000) >>> 26;
			
			// R-type if opcode == 0
			if (opcode == 0)
			{
				// 0x03E00000 has bits 25-21, all set to 1
				// it will help extract rs register number from machine code
				rs = (hex & 0x03E00000);
				
				// 0x001F0000 has bits 20-16, all set to 1
				// it will help extract rt register number from machine code
				rt = (hex & 0x001F0000);
				
				// 0x0000F800 has bits 15-11, all set to 1
				// it will help extract rd register number from machine code
				rd = (hex & 0x0000F800);
				
				rs = (rs >>> 21); // shift left logical rs 21 times
				rt = (rt >>> 16); // shift left logical rt 16 times
				rd = (rd >>> 11); // shift left logical rd 11 times
				
				// 0x0000003F has bits 5-0, all set to 1
				// it will help extract function value from machine code
				// this value decides the operation for R-type instructions
				int function = (hex & 0x0000003F);
				
				// switch to print instruction operation
				switch (function)
				{
					case 32:
						System.out.printf(" add ");
						break;
					case 34:
						System.out.printf(" sub ");
						break;
					case 36:
						System.out.printf(" and ");
						break;
					case 37:
						System.out.printf(" or  ");
						break;
					case 42:
						System.out.printf(" slt ");
						break;
					default:
						System.out.println("Invalid function value for R-type instruction");
				}
				
				// print registers for R-type instruction
				System.out.printf("$%-2d, $%d, $%d", rd, rs, rt); // -leftJustify2d, 
				
			}
			
			// I-type if opcode != 000000
			else
			{
				// 0x03E00000 has bits 25-21, all set to 1
				// it will help extract rs register number from machine code
				rs = (hex & 0x03E00000);
				
				// 0x001F0000 has bits 20-16, all set to 1
				// it will help extract rt register number from machine code
				rt = (hex & 0x001F0000);
				
				rs = (rs >>> 21); // shift left logical rs 21 times
				rt = (rt >>> 16); // shift left logical rt 16 times
				
				// 0x0000FFFF has bits 15-0, all set to 1
				// it will help extract immediate value from machine code
				immediate = (short) (hex & 0x0000FFFF);
				
				// print instruction operation based on opcode value
				if (opcode == 4)
				{
					System.out.printf(" beq ");
				}
				else if (opcode == 5)
				{
					System.out.printf(" bne ");
				}
				else if (opcode == 35)
				{
					System.out.printf(" lw ");
				}
				else if (opcode == 43)
				{
					System.out.printf(" sw ");
				}
				else
				{
					System.out.printf("Invalid Opcode");
				}
				
				// lw and sw
				if (opcode == 35 || opcode == 43)
				{
					System.out.printf(" $%-2d, %3d ($%d)", rt, immediate, rs);
				}
				// bne and beq
				else if (opcode == 4 || opcode == 5)
				{
					// calculate jump address
					val = (start_address + 4 * immediate + 4);
					
					// print register numbers
					System.out.printf("$%-2d, $%-2d,", rs, rt);
					
					// print address of instruction, if the branch is taken
					System.out.printf(" address 0x%05x", val);
				}
				else
				{
					System.out.println("No data found");
				}
			}
			System.out.println();
			start_address += 4;
		}
		
		// saves the console output since start() into a string
		String consoleOutputRecorded = readConsole.stop();
		
		// print String output into output.txt
		PrintToFile output = new PrintToFile();
		output.printToFile("Output.txt", consoleOutputRecorded);
	}
}