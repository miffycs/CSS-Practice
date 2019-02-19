import java.io.FileNotFoundException;
import java.io.PrintWriter;

public class PrintToFile
{
	public void printToFile(String name, String data)
	{
		String fileName = name;
		PrintWriter outputStream = null;
		
		try
		{
			outputStream = new PrintWriter(fileName);
		}
		catch (FileNotFoundException err)
		{
			System.err.println("\nError: FileNotFoundException on " + fileName + " file.");
		}
		
		outputStream.print(data);
		
		outputStream.close();
		
		System.out.println("\n----------------------------------------------------------------------------------------------------");
		System.out.println("\nYour program output has been documented and results saved to: " + fileName);
	}
}