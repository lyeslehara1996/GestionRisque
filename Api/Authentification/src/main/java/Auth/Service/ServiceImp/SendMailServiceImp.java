package Auth.Service.ServiceImp;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import Auth.Service.MailService;
import Auth.entities.Mail;
import freemarker.template.Configuration;
import freemarker.template.Template;

@Service
@Transactional
public class SendMailServiceImp  implements MailService{

    
	@Autowired(required = true)
	JavaMailSender emailSender;
	
	@Autowired
    private SpringTemplateEngine templateEngine;

	@Autowired
	private Configuration config;

	@Override
	 public void send(Mail mail) {
//        try {
//            MimeMessage message = emailSender.createMimeMessage();
//            MimeMessageHelper helper = new MimeMessageHelper(message,
//                    MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
//                    StandardCharsets.UTF_8.name());
////            Context context = new Context();
////            context.setVariables(mail.getModel());
////            String html = templateEngine.process("TemplateEmail", context);
//
//            Context context = new Context();
//            context.setVariables(mail.getModel());
//        
//            Template t = config.getTemplate("TemplateEmail.ftl");
//            
//            String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
//
////            String content = "<html>Hello,</html>"
////                    + "<p>You have requested to reset your password.</p>"
////                    + "<p>Click the link below to change your password:</p>"
////                    + "<br>"
////                    + "<p><a href=\"" + link + "\">Change my password</a></p>"
////                    + "<p>Ignore this email if you do remember your password, "
////                    + "or you have not made the request.</p>";
//            helper.setTo(mail.getTo());
//            helper.setText(html, true);
//            helper.setSubject(mail.getSubject());
//            helper.setFrom(mail.getFrom());
//          
//
//            emailSender.send(message);
//        } catch (Exception e){
//            throw new RuntimeException(e);
//        }
		
		
		 MimeMessage mimeMessage =emailSender.createMimeMessage();
	        try {
	 
	            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
	 
	            mimeMessageHelper.setSubject(mail.getSubject());
	            mimeMessageHelper.setFrom(mail.getFrom());
	            mimeMessageHelper.setTo(mail.getTo());
	             mail.setContent(geContentFromTemplate(mail.getModel()));
	            mimeMessageHelper.setText(mail.getContent(), true);
	 
	            emailSender.send(mimeMessageHelper.getMimeMessage());
	            
	            
	        } catch (MessagingException e) {
	            e.printStackTrace();
	        }
	        
	        
	    }
	 
	    public String geContentFromTemplate(Map < String, Object >model)     { 
	        StringBuffer content = new StringBuffer();
	 
	        try {
	            content.append(FreeMarkerTemplateUtils.processTemplateIntoString(config.getTemplate("TemplateEmail.ftl"), model));
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        return content.toString();
	    }
	 }


	


