package main;

import java.awt.AWTException;
import java.awt.Image;
import java.awt.SystemTray;
import java.awt.TrayIcon;
import java.awt.TrayIcon.MessageType;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.swing.ImageIcon;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.DateTime;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.calendar.CalendarScopes;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.Events;

public class Controller {
	
    /** Application name. */
    private static final String APPLICATION_NAME =
        "Google Calendar API Java Quickstart";

    /** Directory to store user credentials for this application. */
    private static final java.io.File DATA_STORE_DIR = new java.io.File(
        System.getProperty("user.home"), ".credentials/calendar-java-quickstart");

    /** Global instance of the {@link FileDataStoreFactory}. */
    private static FileDataStoreFactory DATA_STORE_FACTORY;

    /** Global instance of the JSON factory. */
    private static final JsonFactory JSON_FACTORY =
        JacksonFactory.getDefaultInstance();

    /** Global instance of the HTTP transport. */
    private static HttpTransport HTTP_TRANSPORT;

    /** Global instance of the scopes required by this quickstart.
     *
     * If modifying these scopes, delete your previously saved credentials
     * at ~/.credentials/calendar-java-quickstart
     */
    private static final List<String> SCOPES =
        Arrays.asList(CalendarScopes.CALENDAR_READONLY);

    static {
        try {
            HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
            DATA_STORE_FACTORY = new FileDataStoreFactory(DATA_STORE_DIR);
        } catch (Throwable t) {
            t.printStackTrace();
            System.exit(1);
        }
    }

    /**
     * Creates an authorized Credential object.
     * @return an authorized Credential object.
     * @throws IOException
     */
    public static Credential authorize() throws IOException {
        // Load client secrets.
        InputStream in =
        		Controller.class.getResourceAsStream("client_secret.json");
        GoogleClientSecrets clientSecrets =
            GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

        // Build flow and trigger user authorization request.
        GoogleAuthorizationCodeFlow flow =
                new GoogleAuthorizationCodeFlow.Builder(
                        HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
                .setDataStoreFactory(DATA_STORE_FACTORY)
                .setAccessType("offline")
                .build();
        Credential credential = new AuthorizationCodeInstalledApp(
            flow, new LocalServerReceiver()).authorize("user");
        System.out.println(
                "Credentials saved to " + DATA_STORE_DIR.getAbsolutePath());
        return credential;
    }

    /**
     * Build and return an authorized Calendar client service.
     * @return an authorized Calendar client service
     * @throws IOException
     */
    public static com.google.api.services.calendar.Calendar
        getCalendarService() throws IOException {
        Credential credential = authorize();
        return new com.google.api.services.calendar.Calendar.Builder(
                HTTP_TRANSPORT, JSON_FACTORY, credential)
                .setApplicationName(APPLICATION_NAME)
                .build();
    }

    public static void main(String[] args) throws IOException, AWTException {
        // Build a new authorized API client service.
        // Note: Do not confuse this class with the
        //   com.google.api.services.calendar.model.Calendar class.

    	List<TrayIcon> icons = new ArrayList<TrayIcon>();
    	List<DateTime> alreadyDisplayed = new ArrayList<DateTime>();
    	
    	Thread server = new Thread(new Runnable(){
    		
        	
			@Override
			public void run() {
				SystemTray tray = SystemTray.getSystemTray();
				try{
					ServerSocket socket = new ServerSocket();
		        	socket.bind(new InetSocketAddress(8080));
					while(true){
						System.out.println("Waiting");
			        	Socket s = socket.accept();
			        	s.getInputStream();
			        	System.out.println("Running");
			        	if(s.getInputStream() != null){
			        		System.out.println("Closing");
			        		tray.remove(icons.get(0));
			        		icons.remove(0);
			        		s.close();
			        	}
					}
				} catch (Exception e){
					
				}				
			}
    		
    	});
    	
    	Thread notifier = new Thread(new Runnable(){

			@Override
			public void run() {
				// TODO Auto-generated method stub
				List<DateTime> alreadySent = new ArrayList<DateTime>();
				while(true){
					Calendar myTime = Calendar.getInstance();
					myTime.setTime(new Date());
					Calendar theirTime = Calendar.getInstance();
					
					
					for(int i = 0; i < alreadyDisplayed.size(); i++){
						theirTime.setTimeInMillis(alreadyDisplayed.get(i).getValue());
						theirTime.add(Calendar.SECOND, 30);
						if(!alreadySent.contains(alreadyDisplayed.get(i)) && myTime.getTimeInMillis() > theirTime.getTimeInMillis()){
							alreadySent.add(alreadyDisplayed.get(i));
							System.out.println("Attempting to send");
							Socket s;
							try {
								s = new Socket("10.104.184.194", 5000);
							
							PrintWriter out =
							        new PrintWriter(s.getOutputStream(), true);
							
							out.print("They havent taken their pills yet.");
							System.out.println("It should have worked!");
							s.close();
							} catch (Exception e){
								e.printStackTrace();
							}
						}
					}
					
					
					
				}
			}
    		
    	});
    	
    	
    	Thread notes = new Thread(new Runnable(){

			@Override
			public void run() {
				try{
				
				
				while(true){
					com.google.api.services.calendar.Calendar service =
				
			            getCalendarService();
			
			        // List the next 10 events from the primary calendar.
			        DateTime now = new DateTime(System.currentTimeMillis());
			        Events events = service.events().list("primary")
			            .setMaxResults(10)
			            .setTimeMin(now)
			            .setOrderBy("startTime")
			            .setSingleEvents(true)
			            .execute();
			        List<Event> items = events.getItems();
			        if (items.size() == 0) {
			            System.out.println("No upcoming events found.");
			        } else {
			            System.out.println("Upcoming events");
			            for (Event event : items) {
			                DateTime start = event.getStart().getDateTime();
			                
			                if (start == null) {
			                    start = event.getStart().getDate();
			                }
			                long lS = start.getValue();
			                long cur = new Date().getTime();
			                if(!alreadyDisplayed.contains(start)){	
			                	if(lS < cur){
				                	TrayIcon trayIcon = displayTray(event.getDescription(), event.getSummary());
				                	alreadyDisplayed.add(start);
				                	icons.add(trayIcon);
			                	}
			                }
			                System.out.printf("%s (%s)\n", event.getSummary(), start);
			            }
			        }
			        try {
						Thread.sleep(60000);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
		        } catch (Exception e){
				e.printStackTrace();
		        }
			
				}
			
			});
    	
    	notes.start();
    	server.start();
    	notifier.start();
    }

    public static TrayIcon displayTray(String desc, String summary) throws AWTException{
        //Obtain only one instance of the SystemTray object
        SystemTray tray = SystemTray.getSystemTray();
        //Creating a tray icon
        ImageIcon icon = new ImageIcon("pill.jpg");
        Image image = icon.getImage();
        //System.out.println(image);
        TrayIcon trayIcon = new TrayIcon(image, "Tray Demo");
        //Let the system resizes the image if needed
        trayIcon.setImageAutoSize(true);
        //Set tooltip text for the tray icon
        trayIcon.setToolTip("System tray icon demo");
        
        trayIcon.addActionListener(new ActionListener(){

			@Override
			public void actionPerformed(ActionEvent arg0) {
				// TODO Auto-generated method stub
				System.out.println("Nothing");
			}
        	
        });
        trayIcon.addMouseListener(new MouseAdapter(){
        	public void mouseClicked(MouseEvent arg0) {
				// TODO Auto-generated method stub
				System.out.println("Cant5");
			}
        });
        trayIcon.addMouseListener(new MouseListener(){
        	@Override
			public void mouseClicked(MouseEvent arg0) {
				// TODO Auto-generated method stub
				System.out.println("Cant5");
			}

			@Override
			public void mouseEntered(MouseEvent arg0) {
				// TODO Auto-generated method stub
				System.out.println("Cant3");
			}

			@Override
			public void mouseExited(MouseEvent arg0) {
				// TODO Auto-generated method stub
				System.out.println("Cant2");
			}

			@Override
			public void mousePressed(MouseEvent arg0) {
				// TODO Auto-generated method stub
				System.out.println("Can1t");
			}

			@Override
			public void mouseReleased(MouseEvent arg0) {
				// TODO Auto-generated method stub
				System.out.println("Cant");
			}
        });
        
        tray.add(trayIcon);
        trayIcon.displayMessage(desc,summary, MessageType.INFO);
        return trayIcon;
    }
}